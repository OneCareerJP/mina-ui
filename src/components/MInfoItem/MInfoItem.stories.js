import MInfoItem from './MInfoItem.vue';

export default {
  title: 'UI/MInfoItem',
  component: MInfoItem
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MInfoItem },
  template: `<MInfoItem v-bind="$props"/>`
});

export const Default = Template.bind({});
Default.args = {
  labelText: 'labelText',
  bodyText: 'bodyText',
  linkText: 'linkText',
  href: '#'
};
