import MStatus from "./index.vue";

export default {
  title: "Status",
  component: MStatus,
  argTypes: {
    type: {
      control: { type: "select", options: ["square", "circle"] }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MStatus },
  template: `<MStatus v-bind="$props" />`
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
