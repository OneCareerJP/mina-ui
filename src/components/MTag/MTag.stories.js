import MTag from './MTag.vue';

export default {
  title: 'Atom/MTag',
  component: MTag,
  argTypes: {
    type: {
      control: { type: 'select', options: ['square', 'circle', 'dot'] }
    },
    status: {
      control: { type: 'select', options: ['draft', 'publish', 'pending'] }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MTag },
  template: `<MTag v-bind="$props" />`
});

export const Square = Template.bind({});
Square.args = {
  label: 'Label Text',
  type: 'square'
};

export const Circle = Template.bind({});
Circle.args = {
  label: 'Label Text',
  type: 'circle'
};

export const Dot = Template.bind({});
Dot.args = {
  label: '',
  type: 'dot',
  status: 'publish'
};
