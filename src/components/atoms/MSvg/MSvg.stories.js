import MSvg from './MSvg.vue';

export default {
  title: 'UI/MSvg',
  component: MSvg
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MSvg },
  template: `<MSvg v-bind="$props"/>`
});

export const Default = Template.bind({});
Default.args = {
  type: 'minaLogo',
  size: '72px'
};
