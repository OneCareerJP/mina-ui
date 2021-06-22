<template>
  <label
    class="m-status"
    :class="[
      `m-status__${type}`,
      active ? `m-status__circle--active` : '',
      status ? `m-status__${type}--${status}` : ''
    ]"
  >
    <span
      v-if="label"
      class="m-status__text"
      :class="[`m-status__text--${type}`, bold ? 'm-status__text--bold' : '']"
      :style="{ 'font-size': size }"
    >
      {{ label }}
    </span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MTag',
  props: {
    type: {
      type: String,
      default: '',
      validator(type: string) {
        return ['', 'circle', 'square', 'dot'].includes(type);
      }
    },
    label: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
@mixin status-foundation {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.m-status {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &__square {
    background: $mina-sky-lighter;
    border-radius: 2px;

    &--open {
      background: $mina-green-lighter;
    }
    &--pending {
      background: $mina-yellow-lighter;
    }
  }

  &__circle {
    border: 1px solid $mina-indigo-light;
    box-sizing: border-box;
    border-radius: 22px;

    &--active {
      background: $mina-indigo-lighter;
      border: none;
    }
  }

  &__dot {
    &--draft {
      &::before {
        @include status-foundation;
        background: $mina-sky;
      }
    }

    &--pending {
      &::before {
        @include status-foundation;
        background: $mina-yellow;
      }
    }

    &--publish {
      &::before {
        @include status-foundation;
        background: $mina-green;
      }
    }
  }

  &__text {
    font-size: 11px;
    padding: 4px;
    min-width: 65px;
    text-align: center;

    &--square {
      color: $mina-ink-light;
    }

    &--circle {
      color: $mina-indigo;
    }

    &--bold {
      font-weight: bold;
    }
  }
}
</style>
