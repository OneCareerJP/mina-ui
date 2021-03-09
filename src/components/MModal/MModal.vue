<template>
  <transition name="modal">
    <div class="m-modal">
      <div class="m-modal__wrapper" @click.self="onCloseModal">
        <MPanel class="m-modal__container" outlined rounded :width="size">
          <section class="m-modal__header">
            <slot name="header" />
          </section>
          <section class="m-modal__body">
            <slot name="body" />
          </section>
          <section class="m-modal__footer">
            <slot name="footer" />
          </section>
        </MPanel>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { Props, Data, Computed, Methods } from './types';
import MPanel from '../MPanel/MPanel.vue';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MModal',
  components: {
    MPanel
  },
  props: {
    size: {
      type: String,
      default: '100%'
    },
    customStyle: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      targetElement: null
    };
  },
  computed: {
    containerSize() {
      const style = {
        width: this.size
      };
      return this.customStyle ? { ...style, ...this.customStyle } : style;
    }
  },
  mounted() {
    this.targetElement = document.getElementsByClassName('m-modal')[0];
    disableBodyScroll(this.targetElement);
  },
  beforeDestroy() {
    clearAllBodyScrollLocks();
  },
  methods: {
    onCloseModal() {
      enableBodyScroll(this.targetElement);
      this.$emit('close');
    }
  }
});
</script>

<style lang="scss" scoped>
.m-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  display: table;
  width: 100%;
  height: 100%;
  background-color: rgba($color: $mina-black, $alpha: 0.5);
  transition: opacity 0.1s ease-in-out;

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    position: relative;
    margin: 0 auto;
    padding: 40px 32px;
    transition: all 0.1s ease;
  }

  &__close-button {
    position: absolute;
    top: 10px;
    right: 1%;
  }

  &__header {
    margin: 0;
  }

  &__body {
    margin: 40px 0 0 0;
    max-height: calc(85vh - 157px);
    overflow-y: auto;
  }

  &__footer {
    margin: 40px 0 0 0;
  }
}

/* transition */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1);
}
</style>
