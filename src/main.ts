import Vue from 'vue';
import { VueConstructor } from 'vue';
import { MAccordion } from './components/atoms/MAccordion';
import { MButton } from './components/atoms/MButton';
import { MCheckboxGroup } from './components/atoms/MCheckboxGroup';
import { MCheckbox } from './components/atoms/MCheckboxGroup/MCheckbox';
import { MCommentLog } from './components/atoms/MCommentLog';
import { MEditLog } from './components/atoms/MEditLog';
import { MHeading } from './components/atoms/MHeading';
import { MIcon } from './components/atoms/MIcon';
import { MIframe } from './components/atoms/MIframe';
import { MImage } from './components/atoms/MImage';
import { MInfoItem } from './components/atoms/MInfoItem';
import { MInputFile } from './components/atoms/MInputFile';
import { MInputText } from './components/atoms/MInputText';
import { MLink } from './components/atoms/MLink';
import { MLoading } from './components/atoms/MLoading';
import { MModal } from './components/atoms/MModal';
import { MPageTop } from './components/atoms/MPageTop';
import { MPanel } from './components/atoms/MPanel';
import { MRadioGroup } from './components/atoms/MRadioGroup';
import { MRadio } from './components/atoms/MRadioGroup/MRadio';
import { MSelectbox } from './components/atoms/MSelectbox';
import { MSvg } from './components/atoms/MSvg';
import { MTabContent, MTabs } from './components/atoms/MTabGroup';
import { MTable } from './components/atoms/MTable';
import { MTag } from './components/atoms/MTag';
import { MTextarea } from './components/atoms/MTextarea';
import { MTooltip } from './components/atoms/MTooltip';
import { MBody, MEmphasis, MLabel } from './components/atoms/MTypography';
import { Alert } from './components/molecules/Alert';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from '@fortawesome/vue-fontawesome';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

library.add(fas);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.component('FontAwesomeLayers', FontAwesomeLayers);
Vue.component('VueCropper', VueCropper);

const components = [
  MAccordion,
  MButton,
  MCheckbox,
  MCheckboxGroup,
  MCommentLog,
  MEditLog,
  MHeading,
  MIcon,
  MIframe,
  MImage,
  MInfoItem,
  MInputFile,
  MInputText,
  MLink,
  MLoading,
  MModal,
  MPageTop,
  MPanel,
  MRadioGroup,
  MRadio,
  MSelectbox,
  MSvg,
  MTabContent,
  MTabs,
  MTable,
  MTag,
  MTextarea,
  MTooltip,
  MBody,
  MEmphasis,
  MLabel,
  Alert
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
  MAccordion,
  MButton,
  MCheckbox,
  MCheckboxGroup,
  MCommentLog,
  MEditLog,
  MHeading,
  MIcon,
  MIframe,
  MImage,
  MInfoItem,
  MInputFile,
  MInputText,
  MLink,
  MLoading,
  MModal,
  MPageTop,
  MPanel,
  MRadioGroup,
  MRadio,
  MSelectbox,
  MSvg,
  MTabContent,
  MTabs,
  MTable,
  MTag,
  MTextarea,
  MTooltip,
  MBody,
  MEmphasis,
  MLabel,
  Alert
};
