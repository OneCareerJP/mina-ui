import MButton from "./index.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: MButton,
  argTypes: {
    /* sampleとして置いておきます */
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    iconColor: { control: "color" },
    iconName: {
      control: {
        type: "select",
        options: [
          "",
          "angle-right",
          "angle-down",
          "angle-left",
          "bell",
          "user",
          "tools",
          "inbox",
          "plus-circle",
          "external-link-alt",
          "building",
          "tv",
          "users",
          "columns",
          "briefcase",
          "check-double",
          "search",
          "square",
          "check-square",
          "eye"
        ]
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MButton },
  template: '<MButton @click="onClick" v-bind="$props">{{ label }}</MButton>',
  methods: {
    onClick() {
      action("clicked");
    }
  }
});

export const Standard = Template.bind({});
Standard.args = {
  label: "Button"
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  type: "primary"
};
