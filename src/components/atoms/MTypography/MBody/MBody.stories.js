import MBody from './MBody.vue';

export default {
  title: 'UI/MTypography/MBody',
  component: MBody,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['', 'x-small', 'small', 'medium', 'large', 'x-large']
      }
    },
    color: {
      control: {
        type: 'select',
        options: [
          '',
          'ink',
          'ink-light',
          'ink-lighter',
          'white',
          'indigo',
          'error'
        ]
      }
    },
    weight: {
      control: {
        type: 'select',
        options: ['', 'slim', 'slightly-thick', 'bold']
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MBody },
  template: `<MBody v-bind="$props">{{ body }}</MBody>`
});

export const Default = Template.bind({});
Default.args = {
  body: 'text'
};
