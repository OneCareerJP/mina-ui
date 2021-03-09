<template>
  <div class="info-item">
    <div class="info-item__label">
      <MLabel color="ink-lighter">{{ labelText }}</MLabel>
      <MIcon
        v-if="icon"
        icon-name="info-circle"
        color="ink-lighter"
        size="12px"
      />
    </div>
    <div class="info-item__body">
      <MBody>{{ bodyText }}</MBody>
      <MLink v-if="href" tag="anchor" :href="href">{{ linkText }}</MLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
import MLabel from '../MTypography/MLabel/MLabel.vue';
import MBody from '../MTypography/MBody/MBody.vue';
import MLink from '../MLink/MLink.vue';
import MIcon from '../MIcon/MIcon.vue';

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    MLabel,
    MLink,
    MBody,
    MIcon
  },
  props: {
    labelText: {
      type: String,
      default: ''
    },
    bodyText: {
      type: String,
      default: ''
    },
    linkText: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.info-item {
  &__body {
    margin: 8px 0 0;
  }
}
</style>
