import MSelectbox from './MSelectbox.vue';

export default {
  title: 'UI/MSelectbox',
  component: MSelectbox,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MSelectbox },
  template: `
    <MSelectbox
      v-bind="$props"
      @change="handleChange"
      :selectedValue="dataSelectedValue"
    />`,
  data() {
    return {
      dataSelectedValue: undefined
    };
  },
  methods: {
    handleChange(value) {
      this.dataSelectedValue = value;
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
  selectList: [2020, 2021, 2022, 2023]
};
