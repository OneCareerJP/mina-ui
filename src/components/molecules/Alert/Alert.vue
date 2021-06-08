<template>
  <div class="alert" :class="`${alertType}`">
    <div class="alert__title">
      <div class="alert__icon">
        <MIcon icon-name="lightbulb" class="alert__icon-fontawesome" />
      </div>
      <MBody size="medium">
        <MEmphasis>{{ title }}</MEmphasis>
      </MBody>
    </div>
    <template v-if="list.length">
      <div class="alert__list-wrapper">
        <MBody size="small">以下の項目に変更があります：</MBody>
        <div class="alert__list">
          <MBody v-for="(item, index) in list" :key="index" size="small">
            ・{{ item }}
          </MBody>
        </div>
      </div>
    </template>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: '',
      validator(type) {
        return ['', 'draft', 'pending', 'publish'].includes(type);
      }
    },
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {
    alertType() {
      return this.type ? `alert--${this.type}` : '';
    }
  }
});
</script>

<style lang="scss" scoped>
.alert {
  padding: 22px 70px 24px;
  border: 2px solid $mina-black;
  border-radius: 8px;
  background: $mina-white;

  &__icon {
    position: absolute;
    top: 0;
    left: -32px;
    width: 14px;
    height: 23px;
  }

  &--draft {
    border-color: $mina-sky;

    .alert__icon {
      color: $mina-sky;
    }
  }

  &--pending {
    border-color: $mina-yellow;

    .alert__icon {
      color: $mina-yellow;
    }
  }

  &--publish {
    border-color: $mina-green;

    .alert__icon {
      color: $mina-green;
    }
  }

  &__title {
    position: relative;
  }

  &__icon-fontawesome {
    width: inherit;
    height: inherit;
  }

  &__list-wrapper,
  &__list {
    margin: 8px 0 0;
  }
}
</style>
