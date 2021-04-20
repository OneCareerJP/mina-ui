<template>
  <div :style="{ display: 'inline-block', width: size }">
    <svg :is="type" :stroke="stroke" :fill="fill" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import minaLogo from '@/assets/images/svg/logo_mina.svg';
export default Vue.extend({
  components: {
    minaLogo
  },
  props: {
    type: {
      type: String,
      required: true
    },
    stroke: {
      type: String,
      default: 'none'
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    size: {
      type: String,
      default: '100%'
    }
  }
});
</script>
