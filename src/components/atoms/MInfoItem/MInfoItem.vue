<template>
  <div class="info-item">
    <div class="info-item__label">
      <MLabel color="ink-lighter">{{ labelText }}</MLabel>
      <MIcon
        v-if="icon"
        class="info-item__icon"
        icon-name="info-circle"
        color="ink-lighter"
        size="12px"
      />
    </div>
    <div
      v-for="(item, itemIndex) in bodies"
      :key="itemIndex"
      class="info-item__body"
    >
      <MBody :color="bodyColor" :size="bodySize" :weight="bodyWeight">{{
        item.body
      }}</MBody>
      <MLink v-if="item.url" tag="anchor" color="denim-light" :href="item.url">
        {{ item.link }}
      </MLink>
    </div>
    <div v-if="!bodies.length" class="info-item__body">
      <MBody>{{ bodyText }}</MBody>
      <MLink v-if="href" tag="anchor" color="denim-light" :href="href">
        {{ linkText }}
      </MLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
import MLabel from '@/components/atoms/MTypography/MLabel/MLabel.vue';
import MBody from '@/components/atoms/MTypography/MBody/MBody.vue';
import MLink from '@/components/atoms/MLink/MLink.vue';
import MIcon from '@/components/atoms/MIcon/MIcon.vue';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MInfoItem',
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
    },
    bodies: {
      type: Array,
      default: () => []
    },
    bodySize: {
      type: String,
      default: 'medium',
      validator(bodySize) {
        return ['', 'x-small', 'small', 'medium', 'large', 'x-large'].includes(
          bodySize
        );
      }
    },
    bodyColor: {
      type: String,
      default: '',
      validator(bodySize) {
        return [
          '',
          'ink',
          'ink-light',
          'ink-lighter',
          'white',
          'indigo'
        ].includes(bodySize);
      }
    },
    bodyWeight: {
      type: String,
      default: '',
      validator(bodySize) {
        return ['', 'slim', 'slightly-thick', 'bold'].includes(bodySize);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.info-item {
  &__icon {
    margin: 0 0 0 8px;
  }
  &__body {
    margin: 8px 0 0;
  }
}
</style>
