import MEditLog from './MEditLog.vue';

export default {
  title: 'UI/MEditLog',
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
  userName: 'UN',
  labelText: 'labelText',
  explanationText:
    'explanationText.<br /> explanationText. explanationText. explanationText.'
};
