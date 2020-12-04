import Vue from 'vue'
import Vuex from 'vuex'

// store modules
import todo from './modules/todo';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    messages: [],
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
  },
  mutations: {
    SET_BAR_IMAGE(state, payload) {
      state.barImage = payload
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload
    },
    SET_MESSAGE(state, payload) {
      state.messages.push(payload);
    },
    CLEAR_MESSAGE(state) {
      state.messages = [];
    }
  },
  actions: {
    setMessage({ commit, dispatch }, payload) {
      commit('SET_MESSAGE', payload);
      dispatch('clearMessage', payload);
    },
    clearMessage({ commit }, payload) {
      if (payload.timeout) {
        setTimeout(() => {
          commit('CLEAR_MESSAGE');
        }, payload.timeout);
      }
    }
  },
  modules: {
    todo,
  }
})

export default store;