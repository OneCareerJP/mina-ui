import MIcon from './MIcon.vue';

export default {
  title: 'UI/MIcon',
  component: MIcon,
  argTypes: {
    customColor: { control: 'color' },
    iconName: {
      control: {
        type: 'select',
        options: [
          '',
          'angle-up',
          'angle-right',
          'angle-down',
          'angle-left',
          'arrow-up',
          'arrow-down',
          'arrow-left',
          'arrow-right',
          'bell',
          'user',
          'tools',
          'inbox',
          'info-circle',
          'plus-circle',
          'external-link-alt',
          'building',
          'tv',
          'users',
          'columns',
          'briefcase',
          'check-square',
          'check-circle',
          'check-double',
          'search',
          'square',
          'check-square',
          'eye',
          'lightbulb',
          'trash-alt',
          'file-alt',
          'envelope',
          'money-bill-wave',
          'clipboard-check',
          'comments'
        ]
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MIcon },
  template: '<MIcon v-bind="$props"/>'
});

export const Default = Template.bind({});
Default.args = {
  iconName: 'angle-right'
};
