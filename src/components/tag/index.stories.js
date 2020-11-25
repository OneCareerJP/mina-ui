import MTag from "./main.vue";

export default {
  title: "Components/Tag",
  component: MTag,
  argTypes: {
    type: {
      control: { type: "select", options: ["square", "circle"] }
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
  label: "Label Text",
  type: "square"
};

export const Circle = Template.bind({});
Circle.args = {
  label: "Label Text",
  type: "circle"
};
