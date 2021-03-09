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
        {{ labelText }}（{{ formatDate }}
      </MLabel>
      <div v-if="explanationText" class="m-edit-log__explanation">
        <MBody class="m-edit-log__text--explanation" color="ink-lighter">
          {{ explanationText }}
        </MBody>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
import MIcon from '@/components/MIcon/MIcon.vue';
import MBody from '@/components/MTypography/MBody/MBody.vue';
import MLabel from '@/components/MTypography/MLabel/MLabel.vue';
import dayjs from 'dayjs';

export default Vue.extend<Data, Methods, Computed, Props>({
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
    editDate: {
      type: String,
      default: '2000-01-01'
    },
    explanationText: {
      type: String,
      default: ''
    }
  },
  computed: {
    formatDate() {
      return dayjs(this.editDate).format('YYYY/MM/DD');
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
      /* NOTE: style崩れを防ぐためにwidthを設定 */
      max-width: 855px;
      padding: 4px 0 4px 12px;
    }
  }
}
</style>
