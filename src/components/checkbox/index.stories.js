import MCheckbox from "./main.vue";

export default {
  title: "Components/Checkbox",
  component: MCheckbox,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MCheckbox },
  template: `<div>
      <MCheckbox :id="1" value="example1" :checked="checked1" @click="checked1 = !checked1">{{ label }}</MCheckbox>
      <MCheckbox
        v-for="sample of samples"
        :key="sample.name"
        :value="sample.name"
        :checked="() => valueChecked(sample)"
        @click="() => onChanege(sample)"
      >
        {{sample.name}}
      </MCheckbox>
    </div>`,
  data() {
    return {
      checked1: false,
      currentValues: [],
      samples: [
        {
          name: "sample"
        }
      ]
    };
  },
  methods: {
    onChanege(newValue) {
      if (
        this.currentValues.some(
          currentValue => currentValue.name === newValue.name
        )
      ) {
        this.currentValues = this.currentValues.filter(
          currentValue => !currentValue.name === newValue.name
        );
      } else {
        this.currentValues.push(newValue);
      }
    },
    valueChecked(sample) {
      return this.currentValues.some(
        currentValue => currentValue.name === sample.name
      );
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  label: "Label Text",
  checked: false
};
