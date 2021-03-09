import MEmphasis from './MEmphasis.vue';

export default {
  title: 'Atom/MTypography/MEmphasis',
  component: MEmphasis,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MEmphasis },
  template: `<MEmphasis>{{ body }}</MEmphasis>`
});

export const Default = Template.bind({});
Default.args = {
  body: 'テキストが入ります'
};
