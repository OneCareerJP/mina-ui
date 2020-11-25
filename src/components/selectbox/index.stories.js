import MSelectbox from "./main.vue";

export default {
  title: "Components/Selectbox",
  component: MSelectbox,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MSelectbox },
  template: `
    <MSelectbox
      v-bind="$props"
      @click="handleChange"
    />`,
  methods: {
    handleChange(value) {
      this.selectedValue = value;
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  placeholder: "placeholder",
  selectList: [2020, 2021, 2022, 2023],
  selectedValue: 2020
};
