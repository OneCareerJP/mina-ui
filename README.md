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
// main.js

import Vue from 'vue';
import MinaUi from 'mina-ui';
import 'mina-ui/dist/mina-ui.css';

Vue.use(MinaUi);
```

## On demand
// main.js

import Vue from 'vue';
import { MButton, MSelectbox } from 'mina-ui';
import 'mina-ui/dist/mina-ui.css';

Vue.component(MButton.name, MButton);
Vue.component(MSelectbox.name, MSelectbox);

new Vue({
  el: '#app',
  render: h => h(App)
});
```


