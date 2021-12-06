import MTextarea from './MTextarea.vue';

export default {
  title: 'UI/MTextarea',
  component: MTextarea,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MTextarea },
  template: `
    <form>
      <MTextarea v-bind="$props" />
      <input type="submit" value="Submit" />
    </form>
  `,
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
  maxHeight: '200px',
  maxlength: 20,
  minlength: 5,
  required: true
};
