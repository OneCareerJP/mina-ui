<template>
  <table class="m-table" :class="`m-table-${type}`">
    <thead :class="`m-table-${type}__thead`">
      <slot name="header" />
    </thead>
    <tbody :class="`m-table-${type}__tbody`">
      <slot name="body" />
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MTable',
  props: {
    type: {
      type: String,
      required: true,
      default: ''
    }
  }
});
</script>

<style lang="scss" scoped>
.m-table-detail {
  width: 100%;
  background: $mina-sky-lighter;
  border-radius: 2px;

  &__thead {
    font-size: 12px;
    color: $mina-ink-lighter;
    text-align: left;
  }

  &__tbody {
    font-size: 18px;
    font-weight: bold;
    color: $mina-ink;
  }
}
.m-table-company {
  &__thead {
    font-size: 10px;
    color: $mina-ink-light;
    background: $mina-sky-light;
    width: 100%;
  }
  &__tbody {
    font-size: 12px;
    color: $mina-ink;
    background: $mina-white;
    box-shadow: 0px 0px 5px rgba($color: #3f3f44, $alpha: 0.05);
    border-radius: 0px 0px 4px 4px;
  }
}
</style>
