<template>
  <button
    class="m-button"
    :class="[
      size ? `m-button--${size}` : '',
      type ? `m-button--${type}` : '',
      disabled ? `m-button--disabled` : ''
    ]"
    :style="buttonStyle"
    :disabled="disabled || processing"
    v-on="listeners"
  >
    <div :class="processing ? `m-button--processing` : ''">
      <slot name="left" />
      <MIcon
        v-if="icon"
        :icon-type="iconType"
        :icon-name="iconName"
        :size="iconSize"
        :color="iconColor"
      />
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import MIcon from '@/components/MIcon/MIcon.vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MButton',
  components: {
    MIcon
  },
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(size: string) {
        return ['', 'small', 'medium', 'large'].includes(size);
      }
    },
    maxWidth: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'standard',
      validator(type: string) {
        return [
          'primary',
          'standard',
          'outlined',
          'icon-rounded',
          'processing'
        ].includes(type);
      }
    },
    iconType: {
      type: String,
      default: 'fas'
    },
    iconName: {
      type: String,
      default: ''
    },
    iconSize: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    processing: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: null
    }
  },
  computed: {
    buttonStyle() {
      const style = {
        'max-width': this.maxWidth,
        'min-width': this.minWidth,
        height: this.height
      };
      return this.customStyle ? { ...style, ...this.customStyle } : style;
    },
    listeners() {
      return { ...this.$listeners };
    }
  }
});
</script>

<style lang="scss" scoped>
.m-button {
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }

  &--small {
    font-size: 12px;
    line-height: 17px;
  }
  &--medium {
    font-size: 13px;
    line-height: 19px;
  }
  &--large {
    font-size: 16px;
    line-height: 21px;
  }

  &--disabled {
    background: $mina-sky-light !important;
    border: 1px solid $mina-sky !important;
    box-shadow: 0 1px 3px rgba($color: $mina-indigo, $alpha: 0.04) $mina-indigo !important;
    color: $mina-ink-lighter !important;
    font-weight: bold !important;
  }

  &:disabled {
    &:hover {
      cursor: not-allowed;
    }
  }

  &--processing,
  &--processing::after {
    border-radius: 50%;
    width: 10em;
    height: auto;
  }

  &--processing {
    font-size: 2px;
    position: relative;
    text-indent: -9999em;
    margin: 0 auto;
    border-top: 1.1em solid rgba($color: $mina-white, $alpha: 0.2) 0%;
    border-right: 1.1em solid rgba($color: $mina-white, $alpha: 0.2) 0%;
    border-bottom: 1.1em solid rgba($color: $mina-white, $alpha: 0.2) 0%;
    border-left: 1.1em solid $mina-white;
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;

    @-webkit-keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }

  &--primary {
    @include mina-denim-gradient;
    color: $mina-white;
    border: 1px solid $mina-denim;

    &:hover {
      @include mina-denim-hover-gradient;
      border: 1px solid $mina-denim;
      box-shadow: 0 1px 3px rgba($color: $mina-indigo, $alpha: 0.04);
    }

    &:active {
      position: relative;
      top: 1px;
    }
  }

  &--standard {
    background: linear-gradient(
      180deg,
      $mina-white 0%,
      rgba($color: $mina-white, $alpha: 0) 100%
    );
    border: 1px solid $mina-sky;
    filter: drop-shadow(0px 1px 0px rgba($color: $mina-ink, $alpha: 0.03));

    &:hover {
      background: linear-gradient(180deg, $mina-white 0%, $mina-sky 100%);
      border: 1px solid $mina-sky;
      box-shadow: 0 1px 0 rgba($color: $mina-ink, $alpha: 0.03);
    }

    &:active {
      position: relative;
      top: 1px;
    }
  }

  &--outlined {
    background: transparent;
    border: 1px solid $mina-denim;
    color: $mina-denim;

    &:hover {
      background: linear-gradient(
        180deg,
        $mina-white 0%,
        rgba($color: $mina-white, $alpha: 0) 100%
      );
    }

    &:active {
      position: relative;
      top: 1px;
    }
  }

  &--icon-rounded {
    color: $mina-indigo;
    background: transparent;
    width: 62px;
    border-color: transparent;
    border-radius: 50%;
    height: 62px;
    outline: none;
    position: relative;

    &:hover {
      background: $mina-sky-light;
    }
    &:active {
      top: 1px;
    }
  }
}
</style>
