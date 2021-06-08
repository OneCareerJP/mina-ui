import MTabContent from './MTabContent/MTabContent.vue';
import MTabs from './MTabs/MTabs.vue';

export default {
  title: 'UI/MTabGroup',
  components: { MTabs, MTabContent },
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MTabs, MTabContent },
  template: `<div style="background:#dadada; padding: 10px;">
    <MTabs type="mina">
      <MTabContent label="Tab1">tab1</MTabContent>
      <MTabContent label="Tab2" :selected="true">tab2</MTabContent>
      <MTabContent label="Tab3">tab3</MTabContent>
      <MTabContent label="Tab4">tab4</MTabContent>
    </MTabs>
  </div>`
});

export const Default = Template.bind({});
Default.args = {};
