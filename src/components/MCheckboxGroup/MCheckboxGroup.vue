<template>
  <div
    class="m-checkbox-group"
    :class="{ 'm-checkbox-group--vertical': vertical }"
  >
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
.m-checkbox-group {
  display: flex;
  align-items: center;

  &--vertical {
    flex-direction: column;
  }
}
</style>
