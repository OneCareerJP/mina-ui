import MPageTop from './MPageTop.vue';

export default {
  title: 'Atom/MPageTop',
  component: MPageTop,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MPageTop },
  template: `<div style="height: 1200px;">
    スクロールすると表示されます
    <MPageTop v-bind="$props" style="width: 56px; position: fixed; top: 40px; left: 40px;" />
  </div>`
});

export const Default = Template.bind({});
Default.args = {};
