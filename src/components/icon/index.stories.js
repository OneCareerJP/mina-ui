import MIcon from "./index.vue";

export default {
  title: "Icon",
  component: MIcon,
  argTypes: {
    color: { control: "color" },
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
  components: { MIcon },
  template: '<MIcon v-bind="$props"/>'
});

export const Default = Template.bind({});
Default.args = {
  iconName: "angle-right"
};
