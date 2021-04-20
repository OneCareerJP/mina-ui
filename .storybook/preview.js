import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from '@fortawesome/vue-fontawesome';
import 'dayjs/locale/ja';
import dayjs from 'dayjs';
dayjs.locale('ja');
library.add(fas);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.component('FontAwesomeLayers', FontAwesomeLayers);
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
