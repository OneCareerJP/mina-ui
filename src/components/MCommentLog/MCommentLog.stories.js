import MCommentLog from './MCommentLog.vue';

export default {
  title: 'UI/MCommentLog',
  component: MCommentLog,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MCommentLog },
  template: `<MCommentLog v-bind="$props"/>`
});

export const Default = Template.bind({});
Default.args = {
  userName: 'SK',
  commentedDate: '2021-01-01 16:55',
  comment:
    'コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。'
};
