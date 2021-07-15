import MIframe from './MIframe.vue';

export default {
  title: 'UI/MIframe',
  component: MIframe
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MIframe },
  template: `<MIframe v-bind="$props"/>`
});

export const Default = Template.bind({});
Default.args = {
  src: '/',
  width: '300px',
  height: '300px'
};
