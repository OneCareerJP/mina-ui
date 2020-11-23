import { VueConstructor } from "vue";
import { MButton } from "./components/button";
import { MCheckbox } from "./components/checkbox";
import { MIcon } from "./components/icon";
import { MLink } from "./components/link";
import { MModal } from "./components/modal";
import { MSelectbox } from "./components/selectbox";
import { MStatus } from "./components/status";
import "./assets/scss/main.scss";

const components = [
  MButton,
  MCheckbox,
  MIcon,
  MLink,
  MModal,
  MSelectbox,
  MStatus
];

const install = function(Vue: VueConstructor) {
  components.forEach(component => {
    // see https://github.com/vuejs/vue-class-component/issues/337#issuecomment-497621786
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Vue.component((component as any).options.name, component);
  });
};

export default {
  install,
  MButton,
  MCheckbox,
  MIcon,
  MLink,
  MModal,
  MSelectbox,
  MStatus
};
