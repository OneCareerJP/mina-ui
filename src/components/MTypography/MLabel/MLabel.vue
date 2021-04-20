<template>
  <span
    class="m-label"
    :class="[
      { 'm-label--bold': bold },
      color ? `m-label__color--${color}` : '',
      size ? `m-label__size--${size}` : ''
    ]"
  >
    <slot />
    <MIcon v-if="icon" icon-name="info-circle" />
    <sup v-if="required" class="m-label__required">*</sup>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
import MIcon from '@/components/MIcon/MIcon.vue';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MLabel',
  components: {
    MIcon
  },
  props: {
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  }
});
</script>

<style lang="scss" scoped>
.m-label {
  font-size: 12px;
  line-height: 1.4;

  &--bold {
    font-weight: bold;
  }

  &__size {
    &--x-large {
      @include label-x-large;
    }
    &--large {
      @include label-large;
    }
    &--medium {
      @include label-medium;
    }
    &--small {
      @include label-small;
    }
  }

  &__required {
    margin: 0 0 0 4px;
    color: $mina-salmon;
  }

  &__color {
    &--ink-lighter {
      color: $mina-ink-lighter;
    }
    &--ink {
      color: $mina-ink;
    }
    &--denim-light {
      color: $mina-denim-light;
    }
  }
}
</style>
