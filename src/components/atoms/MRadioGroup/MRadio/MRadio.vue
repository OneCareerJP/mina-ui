<template>
  <div
    class="m-radio"
    :class="[
      { 'm-radio--checked': isChecked },
      { 'm-radio--disabled': disabled }
    ]"
  >
    <label :class="'m-radio__label'">
      <input
        type="radio"
        :class="'m-radio__input'"
        :name="name"
        :value="value"
        :disabled="disabled"
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
  name: 'MRadio',
  inheritAttrs: false,
  props: {
    checked: {
      type: [Boolean, Function],
      required: true,
      default: false
    },
    value: {
      type: [Number, String],
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
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
$radio-size: 7px;
.m-radio {
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
      border-radius: 50%;
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
    }

    &::after {
      content: '';
      background: $mina-white;
      border-radius: 50%;
      display: block;
      height: $radio-size;
      width: $radio-size;
      position: absolute;
      top: $radio-size;
      left: $radio-size;
    }
  }

  &--disabled &__label {
    &:hover {
      cursor: not-allowed;
    }
  }

  &--checked.m-radio--disabled &__label {
    &::before {
      border: 2px solid $mina-sky-light;
      background: $mina-sky-light;
    }

    &::after {
      content: '';
      background: $mina-white;
      border-radius: 50%;
      display: block;
      height: $radio-size;
      width: $radio-size;
      position: absolute;
      top: $radio-size;
      left: $radio-size;
    }
  }
}
</style>
