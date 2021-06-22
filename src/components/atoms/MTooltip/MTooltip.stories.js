import MTooltip from './MTooltip.vue';
import {
  eventTargetPosition,
  documentBottomPosition
} from '@/helpers/getPosition.ts';

export default {
  title: 'UI/MTooltip',
  component: MTooltip,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MTooltip },
  template: `
    <div
      style="position:relative; cursor:pointer; margin-bottom: 200px;"
      @mouseover.self="showTooltip"
      @mouseout="hideTooltip"
    >
      When you hover, you will see a tooltip.
      <MTooltip v-show="tooltip" top="32px" left="0" v-bind="$props" :angle="angleData" />
    </div>
    `,
  data() {
    return {
      angleData: 'top',
      tooltip: false
    };
  },
  methods: {
    showTooltip(event) {
      this.tooltip = true;
      if (eventTargetPosition(event, 60) > documentBottomPosition()) {
        this.angleData = 'top';
      } else {
        this.angleData = '';
      }
    },
    hideTooltip() {
      this.tooltip = false;
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  body: 'ツールチップテキスト'
};
