import MAccordion from './MAccordion.vue';

export default {
  title: 'Atom/MAccordion',
  component: MAccordion,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MAccordion },
  template: `
  <div style="background-color: #dfe3e8;">
    <MAccordion style="padding: 24px;">
      <template v-slot:title>
        <div>
          title
        </div>
      </template>
      <template v-slot:content>
        <div style="padding:100px; text-align:center;">
          content
        </div>
      </template>
    </MAccordion>
  </div>
  `,
  methods: {}
});

export const Default = Template.bind({});
Default.args = {};
