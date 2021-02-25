<template>
  <button
    class="m-button"
    :class="[
      size ? `m-button--${size}` : '',
      type ? `m-button--${type}` : '',
      disabled ? `m-button--disabled` : ''
    ]"
    :style="buttonStyle"
    :disabled="disabled"
    v-on="listeners"
  >
    <slot name="left" />
    <MIcon
      v-if="icon"
      :icon-type="iconType"
      :icon-name="iconName"
      :size="iconSize"
      :color="iconColor"
    />
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import MIcon from "../icon/main.vue";
import { Props, Data, Computed, Methods } from "./types";

export default Vue.extend<Props, Data, Computed, Methods>({
  name: "MButton",
  components: {
    MIcon
  },
  props: {
    size: {
      type: String,
      default: "medium",
      validator(size: string) {
        return ["", "small", "medium", "large"].includes(size);
      }
    },
    maxWidth: {
      type: String,
      default: ""
    },
    minWidth: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "standard",
      validator(type: string) {
        return ["primary", "standard"].includes(type);
      }
    },
    iconType: {
      type: String,
      default: "fas"
    },
    iconName: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    },
    icon: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: null
    }
  },
  computed: {
    buttonStyle() {
      const style = {
        "max-width": this.maxWidth,
        "min-width": this.minWidth,
        height: this.height
      };
      return this.customStyle ? { ...style, ...this.customStyle } : style;
    },
    listeners() {
      return { ...this.$listeners };
    }
  }
});
</script>

<style lang="scss" scoped>
.m-button {
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }

  /* small,largeは適当 必要出てきたら値直す */
  &--small {
    font-size: 11px;
    line-height: 17px;
  }
  &--medium {
    font-size: 13px;
    line-height: 19px;
  }
  &--large {
    font-size: 15px;
    line-height: 21px;
  }

  &--disabled {
    background: $mina-sky-light !important;
    border: 1px solid $mina-sky !important;
    box-shadow: 0 1px 3px rgba($color: $mina-indigo, $alpha: 0.04) $mina-indigo !important;

    &:hover {
      cursor: not-allowed;
    }
  }

  &--primary {
    @include mina-denim-gradient;
    color: $mina-white;
    border: 1px solid $mina-denim;

    &:hover {
      @include mina-denim-hover-gradient;
      border: 1px solid $mina-denim;
      box-shadow: 0 1px 3px rgba($color: $mina-indigo, $alpha: 0.04);
    }
  }

  &--standard {
    background: linear-gradient(
      180deg,
      $mina-white 0%,
      rgba($color: $mina-white, $alpha: 0) 100%
    );
    border: 1px solid $mina-sky;
    filter: drop-shadow(0px 1px 0px rgba($color: $mina-ink, $alpha: 0.03));

    &:hover {
      background: linear-gradient(180deg, $mina-white 0%, $mina-sky 100%);
      border: 1px solid $mina-sky;
      box-shadow: 0 1px 0 rgba($color: $mina-ink, $alpha: 0.03);
    }
  }
}
</style>
