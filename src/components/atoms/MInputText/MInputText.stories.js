import MInputText from './MInputText.vue';

export default {
  title: 'UI/MInputText',
  component: MInputText,
  argTypes: {
    type: {
      control: { type: 'select', options: ['standard', 'search'] }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MInputText },
  template: `<MInputText v-bind="$props"/>`
});

export const Default = Template.bind({});
Default.args = {
  type: 'search',
  height: '40px',
  placeholder: 'Sample Input Text'
};
