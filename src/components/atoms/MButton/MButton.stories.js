import MButton from './MButton.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI/MButton',
  component: MButton,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    iconColor: {
      control: {
        type: 'select',
        options: [
          'white',
          'indigo',
          'indigo-light',
          'denim-light',
          'ink-light',
          'ink-lighter',
          'sky',
          'success',
          'warning',
          'error'
        ]
      }
    },
    iconName: {
      control: {
        type: 'select',
        options: [
          'angle-right',
          'angle-down',
          'angle-left',
          'bell',
          'user',
          'tools',
          'inbox',
          'plus-circle',
          'external-link-alt',
          'building',
          'tv',
          'users',
          'columns',
          'briefcase',
          'check-double',
          'search',
          'square',
          'check-square',
          'eye'
        ]
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MButton },
  template: '<MButton @click="onClick" v-bind="$props">{{ label }}</MButton>',
  methods: {
    onClick() {
      action('clicked');
    }
  }
});

export const Standard = Template.bind({});
Standard.args = {
  label: 'BUTTON'
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'BUTTON',
  type: 'primary',
  icon: true,
  iconName: 'plus-circle'
};
export const Outlined = Template.bind({});
Outlined.args = {
  label: 'BUTTON',
  type: 'outlined'
};

export const IconRounded = Template.bind({});
IconRounded.args = {
  label: 'BUTTON',
  type: 'icon-rounded',
  icon: true,
  iconName: 'pause-circle',
  minWidth: '72px',
  height: '72px'
};
