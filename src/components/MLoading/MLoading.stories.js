import MLoading from './MLoading.vue';

export default {
  title: 'UI/MLoading',
  component: MLoading,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MLoading },
  template: `<MLoading />`
});

export const Default = Template.bind({});
Default.args = {};
