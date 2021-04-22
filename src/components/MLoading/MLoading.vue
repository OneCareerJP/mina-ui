<template>
  <div class="m-loading">
    <div :style="{ top: top, left: left }" class="m-loading__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MLoading',
  props: {
    top: {
      type: String,
      default: undefined
    },
    left: {
      type: String,
      default: undefined
    }
  }
});
</script>

<style lang="scss" scoped>
.m-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  display: table;
  width: 100%;
  height: 100%;
  background-color: rgba($color: $mina-black, $alpha: 0.5);
  transition: opacity 0.1s ease-in-out;

  &__content {
    @include loading;
    padding: 10px;
  }
  .m-loading__content,
  .m-loading__content::after {
    border-radius: 50%;
    width: 7em;
    height: auto;
  }
}
</style>
