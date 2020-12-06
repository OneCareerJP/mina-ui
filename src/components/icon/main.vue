<template>
  <FontAwesomeLayers class="m-icon__layers">
    <FontAwesomeIcon
      class="m-icon__icon"
      :class="[innerClass, color ? `m-icon__color--${color}` : '']"
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
          "arrow-up",
          "arrow-down",
          "arrow-left",
          "arrow-right",
          "bell",
          "user",
          "tools",
          "inbox",
          "info-circle",
          "plus-circle",
          "external-link-alt",
          "building",
          "tv",
          "users",
          "columns",
          "briefcase",
          "check-square",
          "check-circle",
          "check-double",
          "search",
          "square",
          "eye",
          "lightbulb",
          "trash-alt"
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
    customColor: {
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
        color: this.customColor
      };
      return this.customStyle ? { ...style, ...this.customStyle } : style;
    }
  }
});
</script>

<style lang="scss" scoped>
/* NOTE: disable default values */
.fa-layers svg.svg-inline--fa {
  bottom: inherit;
  left: inherit;
  position: inherit;
  right: inherit;
  top: inherit;
}
.m-icon {
  &__color {
    &--indigo-light {
      color: $mina-indigo-light;
    }
    &--denim-light {
      color: $mina-denim-light;
    }
    &--ink-light {
      color: $mina-ink-light;
    }
    &--ink-lighter {
      color: $mina-ink-lighter;
    }
    &--green {
      color: $mina-green;
    }
  }
}
</style>
