import Alert from '@/components/molecules/Alert/index.vue';

export default {
  title: 'Molecule/Alert',
  component: Alert,
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
  components: { Alert },
  template: `
  <Alert
    :list="alertList"
    v-bind="$props"
  />`,
  data() {
    return {
      alertList: ['企業情報', '企業の魅力']
    };
  }
});

export const Default = Template.bind({});
Default.args = {
  title: 'クライアントから承認依頼がきています',
  type: 'draft'
};
