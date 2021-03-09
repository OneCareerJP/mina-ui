import MEditLog from './MEditLog.vue';

export default {
  title: 'Atom/MEditLog',
  component: MEditLog,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MEditLog },
  template: `<MEditLog v-bind="$props"/>`
});

export const Default = Template.bind({});
Default.args = {
  userName: 'SK',
  labelText: '与信通過',
  explanationText:
    '説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。'
};
