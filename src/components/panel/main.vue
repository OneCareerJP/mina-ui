<template>
  <div
    class="m-panel"
    :style="panelStyle"
    :class="{ 'm-panel--rounded': rounded, 'm-panel--outlined': outlined }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Data, Methods, Computed, Props } from "./types";

export default Vue.extend<Data, Methods, Computed, Props>({
  name: "MPanel",
  props: {
    maxHeight: {
      type: [Number, String],
      default: undefined
    },
    maxWidth: {
      type: [Number, String],
      default: undefined
    },
    minHeight: {
      type: [Number, String],
      default: undefined
    },
    minWeight: {
      type: [Number, String],
      default: undefined
    },
    height: {
      type: [Number, String],
      default: undefined
    },
    width: {
      type: [Number, String],
      default: undefined
    },
    rounded: {
      type: [Boolean, String],
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: null
    }
  },
  computed: {
    panelStyle() {
      const style = {
        "max-height": this.maxHeight,
        "max-width": this.maxWidth,
        "min-height": this.minHeight,
        "min-width": this.minWeight,
        height: this.height,
        width: this.width,
        "border-radius": this.rounded
      };
      return this.customStyle ? { ...style, ...this.customStyle } : style;
    }
  }
});
</script>

<style lang="scss" scoped>
.m-panel {
  background: $mina-white;

  &--rounded {
    border-radius: 8px;
  }

  &--outlined {
    box-shadow: 0px 4px 4px rgba($color: $mina-black, $alpha: 0.25);
  }
}
</style>
