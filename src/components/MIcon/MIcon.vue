<template>
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
      required: true,
      validator(iconName: string) {
        return [
          '',
          'angle-up',
          'angle-right',
          'angle-down',
          'angle-left',
          'arrow-up',
          'arrow-down',
          'arrow-left',
          'arrow-right',
          'bell',
          'briefcase',
          'building',
          'columns',
          'copy',
          'calendar-alt',
          'check-square',
          'check-circle',
          'check-double',
          'eye',
          'external-link-alt',
          'exclamation-triangle',
          'file-alt',
          'inbox',
          'info-circle',
          'image',
          'lightbulb',
          'pause-circle',
          'plus-circle',
          'plus',
          'search',
          'square',
          'tv',
          'tools',
          'trash-alt',
          'times',
          'user',
          'users'
        ].includes(iconName);
      }
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
