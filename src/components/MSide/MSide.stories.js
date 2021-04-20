import MSide from './MSide.vue';

export default {
  title: 'UI/MSide',
  component: MSide
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MSide },
  template: `<MSide v-bind="$props"/>`
});

export const Default = Template.bind({});
Default.args = {};
