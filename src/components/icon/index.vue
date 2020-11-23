<template>
  <FontAwesomeLayers class="m-icon__layers">
    <FontAwesomeIcon
      class="m-icon__icon"
      :class="innerClass"
      :icon="[iconType, iconName]"
      :style="iconStyle"
    />
  </FontAwesomeLayers>
</template>

<script lang="ts">
import Vue from "vue";
import { Props, Data, Computed, Methods } from "./types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from "@fortawesome/vue-fontawesome";

library.add(fas);

export default Vue.extend<Props, Data, Computed, Methods>({
  name: "MIcon",

  components: {
    FontAwesomeIcon,
    FontAwesomeLayers
  },

  props: {
    iconType: {
      type: String,
      default: "fas",
      validator(iconType: string) {
        return ["fas"].includes(iconType);
      }
    },
    iconName: {
      type: String,
      default: "",
      required: true,
      validator(iconName: string) {
        return [
          "",
          "angle-up",
          "angle-right",
          "angle-down",
          "angle-left",
          "bell",
          "user",
          "tools",
          "inbox",
          "plus-circle",
          "external-link-alt",
          "building",
          "tv",
          "users",
          "columns",
          "briefcase",
          "check-double",
          "search",
          "square",
          "check-square",
          "eye"
        ].includes(iconName);
      }
    },
    size: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    innerClass: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: null
    }
  },
  computed: {
    iconStyle() {
      const style = {
        "font-size": this.size,
        "--color": this.color
      };
      return this.customStyle ? { ...style, ...this.customStyle } : style;
    }
  }
});
</script>

<style lang="scss" scoped>
/* 初期値を無効化 */
.fa-layers svg.svg-inline--fa {
  bottom: inherit;
  left: inherit;
  position: inherit;
  right: inherit;
  top: inherit;
}
.m-icon {
  &__icon {
    color: var(--color);
  }
}
</style>
