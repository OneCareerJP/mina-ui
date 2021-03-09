import MSelectbox from './MSelectbox.vue';

export default {
  title: 'Atom/MSelectbox',
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
  placeholder: 'プレイスホルダー',
  selectList: [2020, 2021, 2022, 2023],
  selectedValue: 2020 // 編集画面で予め選択されている場合を想定
};
