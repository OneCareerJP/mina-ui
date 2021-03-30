import MHeading from './MHeading.vue';

export default {
  title: 'UI/MHeading',
  component: MHeading,
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6]
      }
    },
    visual: {
      control: {
        type: 'select',
        options: ['1-underline', '3-underline', '4-underline']
      }
    },
    color: {
      control: {
        type: 'select',
        options: ['ink', 'ink-lighter']
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MHeading },
  template: `<MHeading v-bind="$props">{{ content }}</MHeading>`
});

export const Default = Template.bind({});
Default.args = {
  content: 'content'
};
