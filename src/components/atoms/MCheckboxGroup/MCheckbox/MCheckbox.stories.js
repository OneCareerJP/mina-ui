import MCheckbox from './MCheckbox.vue';

export default {
  title: 'UI/MCheckbox',
  component: MCheckbox,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MCheckbox },
  template: `<div>
      <MCheckbox v-bind="$props" :checked="checked1" @click="checked1 = !checked1">{{ label }}</MCheckbox>
      <hr />
      <MCheckbox
        v-for="sample of samples"
        :key="sample"
        :value="sample"
        :checked="() => valueChecked(sample)"
        style="margin: 8px 0 0;"
        @click="() => onChanege(sample)"
      >
        {{ sample }}
      </MCheckbox>
      <pre>{{ currentValues }}</pre>
    </div>`,
  data() {
    return {
      checked1: false,
      currentValues: [],
      samples: ['sample1', 'sample2', 'sample3', 'sample4']
    };
  },
  methods: {
    onChanege(value) {
      if (this.currentValues.some(currentValue => currentValue === value)) {
        const filteredArray = this.currentValues.filter(
          currentValue => currentValue !== value
        );
        this.currentValues = filteredArray;
        // When emitting
        // this.$emit('update:currentValues', filteredArray);
      } else {
        this.currentValues.push(value);
      }
    },
    valueChecked(target) {
      return this.currentValues.some(currentValue => currentValue === target);
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  label: 'Label Text',
  checked: false
};
