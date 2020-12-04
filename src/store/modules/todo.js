import { http } from '../../plugins/axios';

export default {
  namespaced: true,
  state: {
    data: {
      completed: false,
      createdAt: new Date()
    },
    list: []
  },
  mutations: {
    clearState(state) {
      state.data = {}
    }, 
    setTodo(state, todo) {
      state.data = todo;
    },
    setAll(state, list) {
      state.list = list;
    },
    add(state, payload) {
      state.list.push(payload);
    }
  },
  getters: {
    todos(state) {
      return state.list;
    },
  },
  actions: {
    clearState({commit}){ commit('clearState')},
    async getAll({ commit }) {
      const response = await http.get('todo.json');
      commit('setAll', Object.values(response.data || []));
    },
    async getById({commit, state}, id) {
      const todo = state.list.find((v) => v.id === id);
      if (todo) { commit('setTodo', todo) }
    },
    async save({ commit, dispatch, state }) {
      const method = state.data.id ? `patch` : `post`;
      const finalUrl = state.data.id ? `${state.data.id}.json` : `.json`

      if (!state.data.description) { 
        alert(`A descricao deve ser informado`)
        return
      }

      const response = await http[method](`todo/${finalUrl}`, state.data)
      await commit(state.data.id ? 'setTodo' : `add`, { 
        id: !state.data.id ? response.data.name : state.data.id, 
        ...state.data });
      dispatch(`getAll`)
      commit('clearState')
    },
    async edit({commit}, payload) {
      commit('setTodo', payload);
    },
    async delete({ dispatch }, payload) {
      if (confirm('Deseja realmente excluir esta tarefa?')) {
        await http.delete(`todo/${payload.id}.json`);
        dispatch('getAll');
      }
    }
  }
}