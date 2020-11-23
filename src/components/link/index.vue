<template>
  <router-link
    class="m-link"
    :class="[color ? `m-link--${color}` : '', type ? `m-link-${type}` : '']"
    :to="formatHref"
  >
    <slot />
    <div
      v-if="type === 'solo' || icon"
      :class="type ? `m-link-${type}-icon` : ''"
    >
      <MIcon icon-type="fas" :icon-name="iconName" />
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import { Data, Methods, Computed, Props } from "./types";
import MIcon from "@/components/icon/index.vue";

export default Vue.extend<Data, Methods, Computed, Props>({
  name: "MLink",
  components: {
    MIcon
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    iconName: {
      type: String,
      default: "angle-right"
    },
    to: {
      type: String,
      default: ""
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formatHref() {
      return this.to === null ? "#" : this.to;
    }
  }
});
</script>

<style lang="scss" scoped>
.m-link {
  font-size: 14px;
  text-decoration: none;
  &--denim-light {
    color: $mina-denim-light;
  }
  &--ink {
    color: $mina-ink;
  }
  &--ink-light {
    color: $mina-ink-light;
    text-decoration: underline;
  }

  &:hover {
    color: $mina-denim;
  }
}
.m-link-solo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  font-size: 14px;
  background: $mina-white;
  border-radius: 8px;
  color: $mina-ink;
  text-decoration: none;
  box-sizing: border-box;

  &:not(:first-of-type) {
    margin-top: 8px;
  }
  &__icon {
    color: $mina-denim-light;
  }
}

.m-link-label {
  display: inline-flex;
  margin: 4px;
  padding: 8px 16px;
  background: $mina-white;
  border-radius: 50px;
  text-decoration: none;

  &:hover {
    background: $mina-indigo-lighter;
  }
}

.m-link-text {
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.m-link-filled {
  display: block;
  padding: 16px 0;

  &:not(:first-of-type) {
    border-top: 1px dashed $mina-sky-light;
  }

  &:hover {
    background: rgba($color: $mina-indigo-lighter, $alpha: 0.32);
  }
}
</style>
