import MLink from "./main.vue";

export default {
  title: "Link",
  component: MLink,
  argTypes: {
    type: {
      control: { type: "select", options: ["solo", "label", "text", "filled"] }
    },
    color: {
      control: { type: "select", options: ["denim-light", "ink", "ink-light"] }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MLink },
  template: `<div style="background: #f4f6f8; padding:20px;"><MLink v-bind="$props">{{text}}</MLink></div>`
});

export const Default = Template.bind({});
Default.args = {
  text: "LINK TEXT"
};
