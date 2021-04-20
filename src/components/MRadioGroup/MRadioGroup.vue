<template>
  <div class="m-radio-group" :class="{ 'm-radio-group--vertical': vertical }">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MRadioGroup',
  inheritAttrs: false,
  props: {
    vertical: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss">
.m-radio-group {
  display: flex;

  &--vertical {
    flex-direction: column;
  }
}
</style>
