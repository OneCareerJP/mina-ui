import MImage from './MImage.vue';

export default {
  title: 'UI/MImage',
  component: MImage,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MImage },
  template: `<MImage v-bind="$props" />`
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://tpc.googlesyndication.com/simgad/9781406292468174616',
  alt: 'alt'
};
