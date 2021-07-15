# Installation

## npm

```bash
npm i oc-mina-ui -S
```

## yarn

```bash
yarn add oc-mina-ui
```

# Import components

## Fully import
```js
// main.js

import Vue from 'vue';
import OcMinaUi from 'oc-mina-ui';
import 'oc-mina-ui/dist/mina-ui.css';

Vue.use(OcMinaUi);
```

## On demand
```js
// main.js

import Vue from 'vue';
import { MButton, MSelectbox } from 'oc-mina-ui';
import 'oc-mina-ui/dist/mina-ui.css';

Vue.component('MButton', MButton);
Vue.component('MSelectbox', MSelectbox);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
