import Vue from 'vue';
import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://learning-vue-a81ea-default-rtdb.firebaseio.com/'
})

Vue.use({
  install(Vue) {
    Vue.prototype.$http = http;

    Vue.prototype.$http.interceptors.request.use(req => {
      return req;
    });

    Vue.prototype.$http.interceptors.response.use(res => {

      if (res.config.method === 'get') {
        const array = [];
        for (let chave in res.data) {
          array.push({ id: chave, ...res.data[chave] })
        }
        res.data = array;
        return res;
      }

      return res;
    }, error => Promise.reject(error));
  }
})