<template>
  <img
    class="m-image"
    :style="{ width: width, height: height }"
    :src="src"
    :alt="alt"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MImage',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    }
  }
});
</script>

<style lang="scss" scoped>
.m-image {
  width: 100%;
  height: auto;
}
</style>
