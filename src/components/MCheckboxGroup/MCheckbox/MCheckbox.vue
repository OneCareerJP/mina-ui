<template>
  <div class="m-checkbox" :class="{ 'm-checkbox--checked': isChecked }">
    <label class="m-checkbox__label">
      <input
        :id="id"
        type="checkbox"
        class="m-checkbox__input"
        :name="name"
        :value="value"
        :checked="isChecked"
        v-on="listeners"
      />
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MCheckbox',
  inheritAttrs: false,
  props: {
    checked: {
      type: [Boolean, Function],
      default: false
    },
    value: {
      type: [Number, String],
      default: 0
    },
    id: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    isChecked() {
      if (typeof this.checked === 'boolean') return this.checked;
      if (typeof this.checked === 'function') return this.checked();
      return false;
    },
    listeners() {
      return { ...this.$listeners };
    }
  }
});
</script>

<style lang="scss" scoped>
.m-checkbox {
  &__label {
    height: 21px;
    box-sizing: border-box;
    display: inline-flex;
    position: relative;
    line-height: 1;
    padding: 0 0 0 24px;
    align-items: center;
    cursor: pointer;

    &::before {
      background: $mina-sky-light;
      border-radius: 4px;
      box-sizing: border-box;
      content: '';
      display: block;
      height: 21px;
      width: 21px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &__input {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &--checked &__label {
    &::before {
      border: 2px solid $mina-indigo-light;
      background: $mina-indigo-light;
      border-radius: 4px;
    }

    &::after {
      content: '';
      display: block;
      height: 10px;
      width: 5px;
      position: absolute;
      top: 3px;
      left: 7px;
      border-bottom: 3px solid $mina-white;
      border-right: 3px solid $mina-white;
      transform: rotate(45deg);
    }
  }
}
</style>
