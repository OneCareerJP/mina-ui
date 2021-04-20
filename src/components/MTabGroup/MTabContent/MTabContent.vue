<template>
  <div class="m-tab-content" v-if="dataSelected">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dataSelected: this.selected
    };
  },
  computed: {
    computedSelected: {
      get() {
        return this.dataSelected;
      },
      set(index) {
        this.dataSelected = index;
      }
    }
  },
  mounted() {
    this.$parent.$emit('mounted', this);
  }
});
</script>

<style lang="scss">
.m-tab-content {
  &__inner {
    width: 100%;
  }
}
</style>
