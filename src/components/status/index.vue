<template>
  <label
    class="m-status"
    :class="[`m-status__${type}`, isActive ? `m-status__${type}--active` : '']"
  >
    <span class="m-status__text" :class="`m-status__text--${type}`">{{
      label
    }}</span>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import { Props, Data, Computed, Methods } from "./types";
export default Vue.extend<Props, Data, Computed, Methods>({
  name: "MStatus",
  props: {
    type: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.m-status {
  display: inline-flex;
  place-content: center;
  &__square {
    background: $mina-sky-lighter;
    border-radius: 2px;

    &--active {
      background: $mina-green-lighter;
    }
  }

  &__circle {
    border: 1px solid $mina-indigo-light;
    box-sizing: border-box;
    border-radius: 22px;

    &--active {
      background: $mina-indigo-lighter;
    }
  }

  &__text {
    font-size: 11px;
    padding: 3px 10px;

    &--square {
      color: $mina-ink-light;
    }

    &--circle {
      color: $mina-indigo;
    }
  }
}
</style>
