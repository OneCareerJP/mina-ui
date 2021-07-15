<template>
  <div>
    <ul :class="blockName" :style="tabStyle">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[`${blockName}__item`, activeTabClass(index, 'item')]"
        @click="changeActiveTabIndex(index)"
      >
        <label :class="[`${blockName}__label`, activeTabClass(index, 'label')]">
          {{ tab.label }}
        </label>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MTabs',
  props: {
    type: {
      type: String,
      default: ''
    },
    customStyle: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      tabs: [],
      activeTabIndex: null
    };
  },
  computed: {
    blockName() {
      return this.type ? `m-tabs-${this.type}` : 'm-tabs';
    },
    activeTabClass() {
      return function(index, element) {
        const activeClass =
          this.activeTabIndex === index
            ? `${this.blockName}__${element}--active`
            : '';
        return activeClass;
      };
    },
    tabStyle() {
      return this.customStyle ? { ...this.customStyle } : '';
    }
  },
  created() {
    this.$on('mounted', srcComponent => this.onMount(srcComponent));
  },
  methods: {
    changeActiveTabIndex(index) {
      this.activeTabIndex = index;
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].computedSelected = i === index;
      }
    },
    onMount(srcComponent) {
      this.tabs.push(srcComponent);
      if (srcComponent.selected) this.activeTabIndex = this.tabs.length - 1;
    }
  }
});
</script>

<style lang="scss">
.m-tabs-mina {
  display: flex;
  justify-content: flex-start;
  border-bottom: 4px solid $mina-indigo-light;

  &::after {
    content: '';
    flex-grow: 1;
    display: block;
    margin: 33px 0 0 0;
  }

  &__item {
    display: grid;
    place-content: center;
    background-color: $mina-white;
    box-sizing: border-box;
    width: 120px;
    height: 40px;
    border-radius: 4px 4px 0 0;
    cursor: pointer;

    &:not(:first-child) {
      margin: 0 0 0 8px;
    }

    &--active {
      border-bottom: none;
      background: $mina-indigo-light;
      cursor: default;

      &:hover {
        background-color: $mina-indigo-light;
      }
    }
  }

  &__label {
    color: $mina-ink;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }

    &--active {
      color: $mina-white;
      font-weight: bold;
      cursor: default;
    }
  }
}
</style>
