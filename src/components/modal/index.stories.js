import MModal from "@/components/modal/main.vue";
import MButton from "@/components/button/main.vue";

export default {
  title: "Modal",
  component: MModal,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MModal, MButton },
  template: `<div>
    <MButton @click="openModal">showModal</MButton>
    <MModal v-bind="$props" v-show="showModal" @close="closeModal">
      <template v-slot:header>
        <p>ModalHeader</p>
      </template>
      <template v-slot:body>
        <p style="padding: 100px; text-align:center;">ModalContent</p>
      </template>
      <template v-slot:footer>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <p>ModalFooter</p>
          <MButton type="white" max-width="200px" @click="closeModal">CloseModal</MButton>
        </div>
      </template>
    </MModal>
  </div>`,
  data() {
    return {
      showModal: true
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  size: "80%"
};
