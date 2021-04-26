import Vue from 'vue';
import { VueConstructor } from 'vue';
import { MAccordion } from './components/MAccordion';
import { MButton } from './components/MButton';
import { MCheckboxGroup, MCheckbox } from './components/MCheckboxGroup';
import { MCommentLog } from './components/MCommentLog';
import { MEditLog } from './components/MEditLog';
import { MHeading } from './components/MHeading';
import { MIcon } from './components/MIcon';
import { MIframe } from './components/MIframe';
import { MImage } from './components/MImage';
import { MInfoItem } from './components/MInfoItem';
import { MInputFile } from './components/MInputFile';
import { MInputText } from './components/MInputText';
import { MLink } from './components/MLink';
import { MLoading } from './components/MLoading';
import { MModal } from './components/MModal';
import { MPageTop } from './components/MPageTop';
import { MPanel } from './components/MPanel';
import { MRadioGroup } from './components/MRadioGroup';
import { MSelectbox } from './components/MSelectbox';
import { MSvg } from './components/MSvg';
import { MTabContent, MTabs } from './components/MTabGroup';
import { MTable } from './components/MTable';
import { MTag } from './components/MTag';
import { MTextarea } from './components/MTextarea';
import { MTooltip } from './components/MTooltip';
import { MBody, MEmphasis, MLabel } from './components/MTypography';
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
  MLabel
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
  MLabel
};
