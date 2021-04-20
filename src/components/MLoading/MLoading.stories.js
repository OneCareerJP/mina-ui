import MLoading from './MLoading.vue';

export default {
  title: 'Atom/MLoading',
  component: MLoading,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MLoading },
  template: `<div>
    <MLoading />
  </div>`
});

export const Default = Template.bind({});
Default.args = {};
