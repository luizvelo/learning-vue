import Vue from 'vue';
import axios from 'axios';
import store from '../store';

export const http = axios.create({
  baseURL: 'https://learning-vue-a81ea-default-rtdb.fisrebaseio.com/'
})

Vue.use({
  install(Vue) {

    Vue.prototype.$http = http;

    Vue.prototype.$http.interceptors.request.use(req => {
      return req;
    }, (error) => {

      if (error) {
        const requestConfig = error.config;
        return axios(requestConfig);
      }

      return Promise.reject(error);
    });

    Vue.prototype.$http.interceptors.response.use(res => {

      let method = res.config.method;

      if (method === 'get') {
        const array = [];
        for (let chave in res.data) {
          array.push({ id: chave, ...res.data[chave] })
        }
        res.data = array;
        return res;
      }

      showMessage(method);

      return res;

    }, (error) => {
      showMessage();
      return Promise.reject(error);
    });
  }

})

function showMessage(method) {

  const msgObject = {
    post: { type: 'success', msg: 'Inserido com sucesso.' },
    patch: { type: 'info', msg: 'Alterado com sucesso. ' },
    delete: { type: 'info', msg: 'Excluído com sucesso.' },
  };

  store.dispatch('setMessage', {
    text: !method ? 'Erro ao processar requisição' : msgObject[method].msg,
    type: !method ? 'error' : msgObject[method].type,
    timeout: !method ? null : 3000
  });
}