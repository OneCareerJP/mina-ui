<template>
  <MPanel rounded>
    <ul :class="`${blockName}`">
      <li
        :class="[`${blockName}__list`, { [`${blockName}--active`]: dataOpen }]"
      >
        <button
          type="button"
          :class="`${blockName}__heading`"
          @click="toggleDataOpen"
        >
          <div :class="`${blockName}__title`">
            <slot name="title" />
          </div>
          <MIcon
            v-if="dataOpen"
            icon
            icon-name="angle-up"
            color="indigo-light"
          />
          <MIcon v-else icon icon-name="angle-down" color="indigo-light" />
        </button>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <div v-show="dataOpen" :class="`${blockName}__wrapper`">
            <div :class="`${blockName}__content`">
              <slot name="content" />
            </div>
          </div>
        </transition>
      </li>
    </ul>
  </MPanel>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
import MIcon from '@/components/atoms/MIcon/MIcon.vue';
import MPanel from '@/components/atoms/MPanel/MPanel.vue';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MAccordion',
  components: {
    MIcon,
    MPanel
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    open: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      dataOpen: this.open
    };
  },
  computed: {
    blockName() {
      return this.type ? `m-accordion-${this.type}` : 'm-accordion';
    }
  },
  watch: {
    open(newValue) {
      this.dataOpen = newValue;
    }
  },
  methods: {
    toggleDataOpen() {
      this.toggle ? this.toggle() : (this.dataOpen = !this.dataOpen);
    },
    beforeEnter(element) {
      element.style.height = '0';
    },
    enter(element) {
      element.style.height = `${element.scrollHeight}px`;
    },
    beforeLeave(element) {
      element.style.height = `${element.scrollHeight}px`;
    },
    leave(element) {
      element.style.height = '0';
    }
  }
});
</script>

<style lang="scss">
.m-accordion {
  &__heading {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:active {
      border: none;
      outline: none;
    }
  }

  &__title {
    position: relative;
    display: block;
    width: 100%;
    color: $mina-black;
    text-decoration: none;
  }

  &__wrapper {
    box-sizing: content-box;
    overflow-y: auto;
    transition: height 0.4s ease-in-out;
  }

  &__wrapper > * {
    display: none;
  }

  &--active &__wrapper > * {
    display: block;
  }

  &__list-item {
    margin: 20px 0 0 0;

    &:first-child {
      margin: 0;
    }
  }
}
</style>
