<template>
  <div :style="textareaStyle">
    <textarea
      class="m-textarea"
      :class="disabled ? 'm-textarea--disabled' : ''"
      :style="textareaStyle"
      :name="name"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="value"
      :rows="rows"
      :cols="cols"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :wrap="wrap"
      @input="onChange"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';

export default Vue.extend<Data, Methods, Computed, Props>({
  props: {
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: String,
      default: undefined
    },
    maxWidth: {
      type: String,
      default: undefined
    },
    minWidth: {
      type: String,
      default: undefined
    },
    minHeight: {
      type: String,
      default: undefined
    },
    height: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: undefined
    },
    wrap: {
      type: String,
      default: 'off'
    },
    maxlength: {
      type: Number,
      default: undefined
    },
    rows: {
      type: Number,
      default: 2
    },
    cols: {
      type: Number,
      default: 20
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: null
    }
  },
  computed: {
    textareaStyle() {
      const style = {
        'max-width': this.maxWidth,
        'min-width': this.minWidth,
        'max-height': this.maxHeight,
        'min-height': this.minHeight,
        width: this.width,
        height: this.height
      };
      return this.customStyle ? { ...style, ...this.customStyle } : style;
    }
  },
  methods: {
    onChange(event) {
      const { target } = event;
      if (!(target instanceof HTMLTextAreaElement)) {
        return;
      }
      const value = target.value;
      this.$emit('input', value);
    }
  }
});
</script>

<style lang="scss" scoped>
.m-textarea {
  background: $mina-sky-lighter;
  border: 1px solid $mina-sky-light;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px;
  color: $tx-black;
  font-size: 13px;

  &::placeholder {
    color: $tx-black-lighter;
  }

  &--disabled {
    @include inputTextDiabled;
  }
}
</style>
