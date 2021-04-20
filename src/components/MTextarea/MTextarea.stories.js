import MTextarea from './MTextarea.vue';

export default {
  title: 'UI/MTextarea',
  component: MTextarea,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MTextarea },
  template: `<MTextarea v-bind="$props" />`,
  data() {
    return {
      sample: ''
    };
  }
});

export const Default = Template.bind({});
Default.args = {
  name: 'Sample Textarea',
  placeholder: 'Sample Textarea',
  width: '400px',
  height: '100px',
  maxWidth: '400px',
  maxHeight: '200px'
};
