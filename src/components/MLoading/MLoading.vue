<template>
  <div class="m-loading">
    <div :style="{ top: top, left: left }" class="m-loading__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MLoading',
  props: {
    top: {
      type: String,
      default: undefined
    },
    left: {
      type: String,
      default: undefined
    }
  }
});
</script>

<style lang="scss" scoped>
.m-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  display: table;
  width: 100%;
  height: 100%;
  background-color: rgba($color: $mina-black, $alpha: 0.5);
  transition: opacity 0.1s ease-in-out;

  &__content {
    padding: 10px;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 2px;
    position: relative;
    top: 50%;
    text-indent: -9999em;
    margin: 0 auto;
    border-top: 1.1em solid rgba($color: $mina-white, $alpha: 0.2) 0%;
    border-right: 1.1em solid rgba($color: $mina-white, $alpha: 0.2) 0%;
    border-bottom: 1.1em solid rgba($color: $mina-white, $alpha: 0.2) 0%;
    border-left: 1.1em solid $mina-white;
    transform: translateZ(0);
    animation: load 1.1s infinite linear;

    @-webkit-keyframes load {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
  .m-loading__content,
  .m-loading__content::after {
    border-radius: 50%;
    width: 7em;
    height: auto;
  }
}
</style>
