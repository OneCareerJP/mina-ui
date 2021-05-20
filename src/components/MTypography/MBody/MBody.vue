<template>
  <p
    class="m-body"
    :class="[
      size ? `m-body__size--${size}` : '',
      color ? `m-body__color--${color}` : '',
      weight ? `m-body__weight--${weight}` : ''
    ]"
    :style="lineClampClassName"
  >
    <slot />
  </p>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MBody',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(size) {
        return ['', 'x-small', 'small', 'medium', 'large', 'x-large'].includes(
          size
        );
      }
    },
    color: {
      type: String,
      default: '',
      validator(color) {
        return [
          '',
          'ink',
          'ink-light',
          'ink-lighter',
          'white',
          'indigo'
        ].includes(color);
      }
    },
    weight: {
      type: String,
      default: '',
      validator(weight) {
        return ['', 'slim', 'slightly-thick', 'bold'].includes(
          weight
        );
      }
    },
    lineClamp: {
      type: Number,
      default: 0
    }
  },
  computed: {
    lineClampClassName() {
      return this.lineClamp > 0
        ? {
            display: '-webkit-box',
            overflow: 'hidden',
            'max-height': 'initial',
            '-webkit-line-clamp': `${this.lineClamp}`,
            '-webkit-box-orient': 'vertical'
          }
        : {};
    }
  }
});
</script>

<style lang="scss" scoped>
.m-body {
  line-height: 1.4;

  &__size {
    &--small {
      @include paragraph-small;
    }

    &--medium {
      @include paragraph-medium;
    }

    &--large {
      @include paragraph-large;
    }

    &--x-large {
      @include paragraph-x-large;
    }
  }

  &__color {
    &--ink {
      color: $mina-ink;
    }

    &--ink-light {
      color: $mina-ink-light;
    }

    &--ink-lighter {
      color: $mina-ink-lighter;
    }

    &--indigo {
      color: $mina-indigo;
    }

    &--white {
      color: $mina-white;
    }
  }

  &__weight {
    &--slim {
      font-weight: 400;
    }
    &--slightly-thick {
      font-weight: 500;
    }
    &--bold {
      font-weight: bold;
    }
  }

  &--line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}
</style>
