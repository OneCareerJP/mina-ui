import MRadioGroup from './MRadioGroup.vue';
import MRadio from './MRadio/MRadio.vue';

export default {
  title: 'Atom/MRadioGroup',
  component: MRadio,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MRadioGroup, MRadio },
  template: `<MRadioGroup>
      <MRadio
        v-for="sample of samples"
        :key="sample.name"
        v-bind="$props"
        :value="sample.name"
        :checked="sample.name === currentValue.name"
        @click="() => onChanege(sample.name)"
      >
        {{sample.name}}
      </MRadio>
    </MRadioGroup>`,
  data() {
    return {
      samples: [
        {
          name: 'sample1'
        },
        {
          name: 'sample2'
        }
      ],
      currentValue: {
        name: 'sample1'
      }
    };
  },
  methods: {
    onChanege(newValue) {
      this.currentValue.name = newValue;
    }
  }
});

export const Default = Template.bind({});
Default.args = {};
