<template>
  <input
    :type="inputType"
    :class="[
      `${blockName}`,
      disabled ? `${blockName}--disabled` : '',
      error ? `${blockName}--error` : ''
    ]"
    :style="{ width: width, 'min-width': minWidth, height: height }"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :disabled="disabled"
    :readonly="readonly"
    @input="onChange"
    @keydown="keydownEvent"
    @focus="focusEvent"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MInputText',
  props: {
    inputType: {
      type: String,
      default: 'text',
      validator(inputType: string) {
        return ['text', 'tel', 'url', 'password', 'search'].includes(inputType);
      }
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: undefined
    },
    type: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    blockName() {
      return this.type ? `m-input-text-${this.type}` : 'm-input-text';
    }
  },
  methods: {
    onChange(event) {
      if (event.target instanceof HTMLInputElement) {
        this.$emit('input', event.target.value);
      }
    },
    keydownEvent() {
      this.$emit('keydown');
    },
    focusEvent() {
      this.$emit('focus');
    }
  }
});
</script>

<style lang="scss" scoped>
.m-input-text-search {
  width: 100%;
  height: 100%;
  padding: 0 0 0 44px;
  border: 1px solid $mina-indigo-lighter;
  border-radius: 40px;
  box-sizing: border-box;
  font-size: 12px;
  outline: none;

  &::placeholder {
    color: $mina-indigo-lighter;
  }

  &--error {
    border-color: $mina-red;
  }
}

.m-input-text-standard {
  padding: 14px 16px;
  background-color: $mina-sky-lighter;
  border: 1px solid $mina-sky-light;
  border-radius: 4px;
  font-size: 13px;
  color: $tx-black;
  box-sizing: border-box;

  &::placeholder {
    color: $tx-black-lighter;
  }

  &--error {
    border-color: $mina-red;
  }

  &--disabled {
    @include inputTextDiabled;
  }
}
</style>
