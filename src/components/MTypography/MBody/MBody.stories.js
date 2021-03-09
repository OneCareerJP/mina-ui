import MBody from './MBody.vue';

export default {
  title: 'UI/MTypography/MBody',
  component: MBody,
  argTypes: {
    bodySize: {
      control: {
        type: 'select',
        options: ['', 'x-small', 'small', 'medium', 'large', 'x-large']
      }
    },
    bodyColor: {
      control: {
        type: 'select',
        options: ['', 'ink', 'ink-light', 'ink-lighter', 'white', 'indigo']
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
  body: 'テキストが入ります'
};
