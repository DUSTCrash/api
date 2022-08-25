import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNumber from 'vue-number-animation';
import VueNoty from 'vuejs-noty'

import 'vuejs-noty/dist/vuejs-noty.css';

import './assets/styles/reset.scss';
import './assets/styles/fonts.scss';
import './assets/styles/app.scss';

Vue.use(VueNoty, {
    timeout: 4000,
    progressBar: true,
    layout: 'bottomCenter',
    theme: 'metroui'
});

Vue.use(VueNumber);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
