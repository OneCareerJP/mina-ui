import MLabel from './MLabel.vue';

export default {
  title: 'UI/MTypography/MLabel',
  component: MLabel,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MLabel },
  template: `<MLabel v-bind="$props" />`
});

export const Default = Template.bind({});
Default.args = {
  body: 'text'
};
