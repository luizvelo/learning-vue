import Vue from 'vue';
import axios from 'axios';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://learning-vue-a81ea-default-rtdb.firebaseio.com/'
    });
  }
})