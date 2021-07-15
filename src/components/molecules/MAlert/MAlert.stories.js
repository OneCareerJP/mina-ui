import MAlert from './MAlert.vue';

export default {
  title: 'Molecule/MAlert',
  component: MAlert,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['draft', 'pending', 'publish']
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MAlert },
  template: `
  <MAlert
    :list="alertList"
    v-bind="$props"
  />`,
  data() {
    return {
      alertList: ['メールアドレス', '住所']
    };
  }
});

export const Default = Template.bind({});
Default.args = {
  title:
    '登録内容を変更しようとしています。変更内容が正しいか確認してください。',
  type: 'draft'
};
