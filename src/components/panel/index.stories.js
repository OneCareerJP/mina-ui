import MPanel from "./main.vue";

export default {
  title: "Components/Panel",
  component: MPanel,
  argTypes: {
    rounded: {
      control: { type: "select", options: [true, false] }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MPanel },
  template: `
    <MPanel v-bind="$props">
      <div style="padding:100px; text-align:center;">panel content</div>
    </MPanel>`
});

export const Default = Template.bind({});
Default.args = {
  rounded: false
};
