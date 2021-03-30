<template>
  <transition name="fade">
    <MButton
      v-show="show"
      class="m-page-top"
      type="outlined"
      max-width="56px"
      height="56px"
      icon
      icon-name="angle-up"
      @click="moveToTop"
    />
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { Props, Data, Computed, Methods } from './types';
import MButton from '@/components/MButton/MButton.vue';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MPageTop',
  components: {
    MButton
  },
  props: {
    duration: {
      type: Number,
      default: 300
    },
    interval: {
      type: Number,
      default: 25
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    const style = document.createElement('style');
    style.innerHTML = `
                    .fade-enter-active, .fade-leave-active {
                        transition: opacity .5s;
                    }
                    .fade-enter, .fade-leave-to {
                        opacity: 0;
                    }
                `;
    document.getElementsByTagName('head')[0].appendChild(style);

    // Added scroll event.
    window.addEventListener('scroll', () => {
      this.show = window.scrollY > 100;
    });
  },
  methods: {
    moveToTop() {
      const duration = this.duration;
      const interval = this.interval;
      const step = -window.scrollY / Math.ceil(duration / interval);
      const timer = setInterval(() => {
        window.scrollBy(0, step);

        if (window.scrollY <= 0) {
          clearInterval(timer);
        }
      }, interval);
    }
  }
});
</script>

<style lang="scss" scoped>
.m-button--outlined::v-deep:active {
  &:active {
    position: fixed;
    top: inherit;
  }
}
.m-page-top {
  display: grid;
  place-content: center;
  border-radius: 50%;
  font-size: 38px;
  color: $mina-indigo-light;
  border-color: $mina-indigo-light;

  &:focus {
    outline: none;
  }
}
</style>
