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
  userName: 'SK',
  labelText: 'labelText',
  explanationText:
    'explanationText. explanationText. explanationText. explanationText.'
};
