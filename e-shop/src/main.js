import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { router } from './routes.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false;


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
