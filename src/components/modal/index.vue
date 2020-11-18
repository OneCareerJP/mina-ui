<template>
  <transition name="modal">
    <div class="m-modal">
      <div class="m-modal__wrapper" @click.self="onCloseModal">
        <article class="m-modal__container" :style="containerSize">
          <section class="m-modal__header">
            <slot name="header" />
          </section>
          <section class="m-modal__body">
            <slot name="body" />
          </section>
          <section class="m-modal__footer">
            <slot name="footer" />
          </section>
        </article>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { Props, Data, Computed, Methods } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MModal',
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
  computed: {
    containerSize() {
      const style = {
        width: this.size
      };
      return this.customStyle ? { ...style, ...this.customStyle } : style;
    }
  },
  methods: {
    onCloseModal() {
      this.$emit('close');
    }
  }
});
</script>

<style lang="scss">
.m-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  display: table;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000, $alpha: 0.5);
  transition: opacity 0.1s ease-in-out;

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    position: relative;
    margin: 0 auto;
    padding: 1.2em;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba($color: #000, $alpha: 0.33);
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
    margin: 16px 0 0 0;
  }

  &__footer {
    margin: 16px 0 0 0;
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
