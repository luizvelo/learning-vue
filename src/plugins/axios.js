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
    }, (error) => {

      console.log('error', error);

      if (error) {
        const requestConfig = error.config;
        return axios(requestConfig);
      }
    
      return Promise.reject(error);
    });

    Vue.prototype.$http.interceptors.response.use(res => {

      if (res.config.method === 'get') {
        const array = [];
        for (let chave in res.data) {
          array.push({ id: chave, ...res.data[chave] })
        }

        res.data = array;
        return res;

      } else if (res.config.method === 'post'){
        alert('Adicionado com sucesso!')
        res.data.createdAt = new Date();
      }  else if (res.config.method === 'delete') {
        alert('Excluído com sucesso!')
      } else if (res.config.method === 'patch') {
        alert('Alterado com sucesso')
        console.log(res.data);
        res.data['updatedAt'] = new Date();
      }

      console.log('res', res);

      
      return res;

    }, error => Promise.reject(error));
  }
})