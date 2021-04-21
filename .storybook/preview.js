import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from '@fortawesome/vue-fontawesome';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import 'dayjs/locale/ja';
import dayjs from 'dayjs';

library.add(fas);
dayjs.locale('ja');

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.component('FontAwesomeLayers', FontAwesomeLayers);
Vue.component('VueCropper', VueCropper);
// NOTE:Vue Router mock
Vue.component('RouterLink', {
  template: `
    <a>
      <slot />
    </a>
  `
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};
