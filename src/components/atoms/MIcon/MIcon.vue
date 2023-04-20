<template>
  <div class="m-icon" v-on="listeners">
    <FontAwesomeLayers
      class="m-icon__layers"
      :style="{ width: size, height: size }"
    >
      <FontAwesomeIcon
        class="m-icon__icon"
        :class="[innerClass, color ? `m-icon__color--${color}` : '']"
        :icon="[iconType, iconName]"
        :style="iconStyle"
      />
    </FontAwesomeLayers>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MIcon',
  props: {
    iconType: {
      type: String,
      default: 'fas',
      validator(iconType: string) {
        return ['fas'].includes(iconType);
      }
    },
    iconName: {
      type: String,
      default: '',
      required: true
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    customColor: {
      type: String,
      default: ''
    },
    innerClass: {
      type: String,
      default: ''
    },
    customStyle: {
      type: Object,
      default: null
    }
  },
  computed: {
    iconStyle() {
      const style = {
        'font-size': this.size,
        color: this.customColor
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
/* NOTE:Invalidate the initial value. */
.fa-layers svg.svg-inline--fa {
  bottom: inherit;
  left: inherit;
  position: inherit;
  right: inherit;
  top: inherit;
}
/* NOTE:Add more colors if needed. */
.m-icon {
  display: inline-block;
  &__color {
    &--white {
      color: $mina-white;
    }
    &--indigo {
      color: $mina-indigo;
    }
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
    &--sky {
      color: $mina-sky;
    }
    &--success {
      color: $mina-green;
    }
    &--warning {
      color: $mina-yellow;
    }
    &--error {
      color: $mina-red;
    }
  }
}
</style>
