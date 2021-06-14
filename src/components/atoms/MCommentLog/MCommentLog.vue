<template>
  <div class="m-comment-log">
    <MBody
      class="m-comment-log__body"
      color="ink-lighter"
      size="small"
      v-html="$sanitize(comment ? comment.replace(/\n/g, '<br/>') : '')"
    />
    <!-- 使用するかもなので残しておく -->
    <!-- <MBody color="ink-lighter" size="small">{{ userName }}</MBody> -->
    <!-- <MBody color="ink-lighter" size="small">（{{ formatDate }}）</MBody> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import dayjs from 'dayjs';
import MBody from '@/components/atoms/MTypography/MBody/MBody.vue';
import { Data, Methods, Computed, Props } from './types';

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MCommentLog',
  components: {
    MBody
  },
  props: {
    comment: {
      type: String,
      default: ''
    },
    userName: {
      type: String,
      default: ''
    },
    commentedDate: {
      type: String,
      default: ''
    }
  },
  computed: {
    formatDate() {
      return dayjs(this.commentedDate).format('YYYY/MM/DD HH:mm');
    }
  }
});
</script>
