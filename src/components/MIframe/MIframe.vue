<template>
  <iframe :id="id" :title="title" :width="width" :height="height" :src="src" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MIframe',
  props: {
    id: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: undefined
    },
    height: {
      type: String,
      default: undefined
    },
    src: {
      type: String,
      default: undefined
    }
  }
});
</script>
