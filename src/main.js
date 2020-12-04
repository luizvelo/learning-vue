import Vue from 'vue'
import App from './App.vue'

// plugins
import './plugins/base'
import './plugins/axios';
import './plugins/dateFormat';
import vuetify from './plugins/vuetify';

import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
