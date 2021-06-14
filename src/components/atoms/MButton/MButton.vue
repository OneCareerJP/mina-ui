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
    <div
      :style="innerStyle"
      :class="[innerClass, processing ? `m-button--processing` : '']"
    >
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
import MIcon from '@/components/atoms/MIcon/MIcon.vue';
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
        return ['', 'primary', 'standard', 'outlined', 'icon-rounded'].includes(
          type
        );
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
    },
    innerStyle: {
      type: Object,
      default: null
    },
    innerClass: {
      type: String,
      default: ''
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
    @include button-small;
  }
  &--medium {
    @include button-medium;
  }
  &--large {
    @include button-large;
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

  &--processing {
    @include loading;
  }

  &--processing,
  &--processing::after {
    border-radius: 50%;
    width: 7em;
    height: auto;
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
