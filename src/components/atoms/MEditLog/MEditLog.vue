<template>
  <div class="m-edit-log">
    <div class="m-edit-log__icon">
      <span v-if="userName" class="m-edit-log__text--user">
        {{ userName }}
      </span>
      <MIcon v-else icon-name="building" />
    </div>
    <div class="m-edit-log__text-wrapper">
      <MLabel size="large" color="ink-lighter">
        {{ labelText }}（{{ formatDatetime }}）
      </MLabel>
      <div v-if="explanationText" class="m-edit-log__explanation">
        <MBody
          v-html="explanationText"
          class="m-edit-log__text--explanation"
          color="ink-lighter"
        >
          {{ explanationText }}
        </MBody>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
import MIcon from '@/components/atoms/MIcon/MIcon.vue';
import MBody from '@/components/atoms/MTypography/MBody/MBody.vue';
import MLabel from '@/components/atoms/MTypography/MLabel/MLabel.vue';
import dayjs from 'dayjs';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MEditLog',
  components: {
    MIcon,
    MLabel,
    MBody
  },
  props: {
    userName: {
      type: String,
      default: ''
    },
    labelText: {
      type: String,
      default: ''
    },
    editDatetime: {
      type: String,
      default: '2000-01-01'
    },
    explanationText: {
      type: String,
      default: ''
    }
  },
  computed: {
    formatDatetime() {
      return dayjs(this.editDatetime).format('YYYY/MM/DD HH:mm:ss');
    }
  }
});
</script>

<style lang="scss" scoped>
.m-edit-log {
  display: flex;
  &__icon {
    display: grid;
    place-content: center;
    width: 32px;
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: $mina-salmon; // 仮の設定
    border: 1px solid $mina-salmon;
  }
  &__text-wrapper {
    margin: 8px 0 0 8px;
  }
  &__explanation {
    border-left: 2px solid $mina-sky;
    margin: 8px 0 0;
  }
  &__text {
    &--user {
      font-size: 12px;
    }
    &--explanation {
      /* NOTE: Set width to prevent style collapse. */
      max-width: 855px;
      padding: 4px 0 4px 12px;
    }
  }
}
</style>
