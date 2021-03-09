<template>
  <component
    :is="tagLevel"
    :class="[
      `m-heading${visualLevel}`,
      color ? `m-heading${visualLevel}--${color}` : ''
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MHeading',
  props: {
    level: {
      type: Number,
      validator(level: number) {
        return [1, 2, 3, 4, 5, 6].includes(level);
      },
      default: 1
    },
    visual: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    tagLevel() {
      return `h${this.level}`;
    },
    visualLevel() {
      return this.visual ? this.visual : this.level;
    }
  }
});
</script>

<style lang="scss" scoped>
/* NOTE:headind毎のデザインがあれば変更 */
.m-heading1 {
  color: $mina-ink;
  font-size: $font-xxxx-large;
  font-weight: bold;
  line-height: 38px;

  &--ink-lighter {
    color: $mina-ink-lighter;
  }

  &--ink {
    color: $mina-ink;
  }
}
.m-heading1-underline {
  padding: 0 0 24px;
  color: $mina-ink;
  font-size: $font-xxxx-large;
  line-height: 1.45;
  font-weight: bold;
  border-bottom: 2px solid $mina-sky-light;

  &--ink-lighter {
    color: $mina-ink-lighter;
  }

  &--ink {
    color: $mina-ink;
  }
}

.m-heading2 {
  font-size: $font-xx-large;
  line-height: 1.45;

  &--ink-lighter {
    color: $mina-ink-lighter;
  }

  &--ink {
    color: $mina-ink;
  }
}

.m-heading3 {
  color: $mina-ink;
  font-size: $font-x-large;
  font-weight: bold;
  line-height: 1.45;

  &--ink-lighter {
    color: $mina-ink-lighter;
  }

  &--ink {
    color: $mina-ink;
  }
}
.m-heading3-underline {
  padding: 0 0 16px;
  font-size: $font-x-large;
  font-weight: bold;
  line-height: 1.45;
  border-bottom: 2px solid $mina-sky-light;

  &--ink-lighter {
    color: $mina-ink-lighter;
  }

  &--ink {
    color: $mina-ink;
  }
}

.m-heading4 {
  font-size: $font-large;
  font-weight: bold;
  line-height: 1.45;

  &--ink-lighter {
    color: $mina-ink-lighter;
  }

  &--ink {
    color: $mina-ink;
  }
}
.m-heading4-underline {
  border-bottom: 1px solid $mina-sky-light;
  padding: 0 0 8px;
  font-size: $font-large;
  font-weight: bold;
  line-height: 1.45;

  &--ink-lighter {
    color: $mina-ink-lighter;
  }

  &--ink {
    color: $mina-ink;
  }
}

.m-heading5 {
  font-size: $font-small;
  line-height: 1.45;

  &--ink-lighter {
    color: $mina-ink-lighter;
  }

  &--ink {
    color: $mina-ink;
  }
}

.m-heading6 {
  font-size: $font-x-small;
  line-height: 1.45;

  &--ink-lighter {
    color: $mina-ink-lighter;
  }

  &--ink {
    color: $mina-ink;
  }
}
</style>
