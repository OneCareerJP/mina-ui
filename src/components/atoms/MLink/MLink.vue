<template>
  <component
    class="m-link"
    :is="LinkType"
    :class="[
      color ? `m-link__color--${color}` : '',
      size ? `m-link__size--${size}` : '',
      type ? `m-link-${type}` : '',
      bold ? 'm-link--bold' : '',
      underline ? 'm-link--underline' : ''
    ]"
    :style="customStyle"
    :to="to"
    :href="href"
    :target="blank ? '_blank' : '_self'"
    :rel="blank ? 'noopener noreferrer' : ''"
    :active-class="activeClass"
    :exact-active-class="exactActiveClass"
  >
    <slot />
    <div
      v-if="type === 'solo' || icon"
      :class="type ? `m-link-${type}-icon` : ''"
    >
      <MIcon icon-type="fas" :icon-name="iconName" />
    </div>
  </component>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
import MIcon from '@/components/MIcon/MIcon.vue';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MLink',
  components: {
    MIcon
  },
  props: {
    tag: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator(size: string) {
        return ['', 'x-small', 'small', 'medium', 'large'].includes(size);
      }
    },
    iconName: {
      type: String,
      default: 'angle-right'
    },
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    activeClass: {
      type: String,
      default: ''
    },
    exactActiveClass: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: false
    },
    blank: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: null
    }
  },
  computed: {
    LinkType() {
      return this.tag === 'anchor' ? 'a' : 'router-link';
    }
  }
});
</script>

<style lang="scss" scoped>
.m-link {
  text-decoration: none;
  &__color {
    &--denim-light {
      color: $mina-denim-light;
    }
    &--ink {
      color: $mina-ink;
    }
    &--ink-light {
      color: $mina-ink-light;
    }
    &:hover {
      color: $mina-denim;
    }
  }
  &__size {
    &--medium {
      @include link-medium;
    }

    &--small {
      @include link-small;
    }

    &--x-small {
      @include link-x-small;
    }
  }

  &--bold {
    font-weight: bold;
  }

  &--underline {
    text-decoration: underline;
  }
}
.m-link-solo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  font-size: $link-medium;
  background: $mina-white;
  border-radius: 8px;
  color: $mina-ink;
  text-decoration: none;
  box-sizing: border-box;

  &:not(:first-of-type) {
    margin-top: 8px;
  }
  &__icon {
    color: $mina-denim-light;
  }
}

.m-link-label {
  display: inline-flex;
  margin: 4px;
  padding: 8px 16px;
  background: $mina-white;
  border-radius: 50px;
  text-decoration: none;

  &:hover {
    background: $mina-indigo-lighter;
  }
}

.m-link-text {
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.m-link-filled {
  display: block;
  padding: 16px 0;

  &:not(:first-of-type) {
    border-top: 1px dashed $mina-sky-light;
  }

  &:hover {
    background: rgba($color: $mina-indigo-lighter, $alpha: 0.32);
  }
}
</style>
