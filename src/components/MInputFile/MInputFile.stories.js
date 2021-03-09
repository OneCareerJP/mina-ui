import MInputFile from './MInputFile.vue';

export default {
  title: 'Atom/MInputFile',
  component: MInputFile,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MInputFile },
  template: `<div>
    <MInputFile v-bind="$props" />
  </div>`
});

export const Default = Template.bind({});
Default.args = {
  placeholder: '画像ファイルをアップロードする',
  allowType: ['image/jpeg', 'image/png'],
  accept: 'image/*',
  unit: 'MB',
  limitSize: 5
};
