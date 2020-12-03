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
      // console.log('chamou esse cara', state, list);
      state.list = list;
    },
    add(state, nome) {
      const newTodoId = state.list[state.list.length - 1].id + 1;
      const newTodo = { id: newTodoId, nome };
      state.list.push(newTodo);
    },
    delete(state, index) {
      state.list.splice(index, 1);
    }
  },
  getters: {
    todos(state) {
      return state.list;
    }
  },
  actions: {
    getAll({commit}) {
      // console.log(state);
      // this.$http.post('todo.json', {descrption: 'teste'});
      commit('setAll', [{id: 1,description: 'Teste'}]);

      const vm = this._vm;

      console.log(vm.$root);

      
      
    // this.$http.get('todo.json').then((rsponse) => console.log(rsponse));
      
    },
    add(context, payload) {

      this.$http 
        .post('todo.json', payload)
        .then(() => context.commit('add', payload));

    },
    delete(context, index) {
      if (confirm('Deseja realmente excluir esta tarefa?')) {
        context.commit('delete', index);
      }
    }
  }
}