<template>
  <transition name="fade">
    <MPanel
      class="m-tooltip"
      :class="angle ? `m-tooltip--${angle}` : ''"
      :style="{ top: top, left: left, width: width }"
      rounded
    >
      <slot />
    </MPanel>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
import MPanel from '@/components/MPanel/MPanel.vue';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MTooltip',
  components: {
    MPanel
  },
  props: {
    angle: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    }
  }
});
</script>

<style lang="scss" scoped>
.m-tooltip {
  position: absolute;
  display: inline-block;
  padding: 8px 12px;
  max-width: 300px;
  background: $mina-white;
  border: solid 2px $mina-sky;
  box-sizing: border-box;
  cursor: default;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -18px;
    left: 50%;
    margin-left: -2px;
    border: 6px solid transparent;
    border-bottom: 12px solid $mina-white;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    top: -24px;
    left: 50%;
    margin-left: -4px;
    border: 8px solid transparent;
    border-bottom: 15px solid $mina-sky;
    z-index: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
