<template>
  <aside :style="{ 'min-width': minWidth }">
    <slot />
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MSide',
  props: {
    minWidth: {
      type: String,
      default: '200px'
    }
  }
});
</script>
