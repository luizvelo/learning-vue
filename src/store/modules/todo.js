import axios from 'axios';

export default {
  namespaced: true,
  state: {
    data: {
      id: null,
      description: '',
      createdAt: new Date(),
      priority: '',
      completed: false
    },
    list: []
  },
  mutations: {
    setAll(state, list) {
      state.list = list;
    },
    add(state) {
      const newTodoId = state.list[state.list.length - 1].id + 1;
      const newTodo = { id: newTodoId, ...state.data };
      state.list.push(newTodo);
    },
    delete(state, index) {
      state.list.splice(index, 1);
    }
  },
  getters: {
    todos(state) {
      return state.list;
    },
    test(state) {
      console.log(state.list);
    }
  },
  actions: {
    getAll({ commit }) {

      axios.get('https://learning-vue-a81ea-default-rtdb.firebaseio.com/todo.json')
        .then((response) => {
          commit('setAll', Object.values(response.data));
        })


      // console.log(context);
      // console.log(state);
      // this.$http.post('todo.json', {descrption: 'teste'});
      // commit('setAll', [{ id: 1, description: 'Teste' }]);
      // axios.get('todo.json').then((v) => console.log(v));
      // this.$http.get('todo.json').then((rsponse) => console.log(rsponse));

    },
    add(context, payload) {

      this.$http
        .post('todo.json', payload)
        .then(() => context.commit('add', payload));

    },
    delete(context, index) {

      if (confirm('Deseja realmente excluir esta tarefa?')) {

        axios.get('https://learning-vue-a81ea-default-rtdb.firebaseio.com/todo.json/${}')
          .then(() => {
            context.commit('delete', index);
          })

      }



    }
  }
}