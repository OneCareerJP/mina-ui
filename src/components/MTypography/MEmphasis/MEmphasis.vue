<template>
  <span class="m-emphasis">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MEmphasis'
});
</script>

<style lang="scss" scoped>
.m-emphasis {
  font-weight: bold;
}
</style>
