// import { http } from '../../plugins/axios';

export default {
    namespaced: true,
    state: {
        active_tab: 0,
        tabs: [
            { id: 1, name: "Dados" },
            { id: 2, name: "Fotos" },
        ],
        data: {},
        link: null,
        list: [
            {
                id: 1,
                name: 'Neymar Jr.',
                src: 'https://i.pinimg.com/originals/be/a0/57/bea0571b356fa4d2fa8165aa7d92eef1.jpg'
            },
            {
                id: 2,
                name: 'Cleber Pereira',
                src: 'https://upload.wikimedia.org/wikipedia/commons/6/60/KPereira2008.jpg'
            },
        ],
    },
    mutations: {
        verFoto(state, item) {
            state.data = item;
            state.active_tab = 1;
        }
    },
    getters: {
        todos(state) {
            return state.list;
        },
        getData(state) {
            return state.data;
        },
        getImagem(state) {
            return state.data.src;
        },
        getTabs(state) {
            return state.tabs;
        },
        getActiveTab(state) {
            return state.active_tab;
        }
    },
    actions: {
        verFoto({ commit }, item) {
            setTimeout(() => {
                commit('verFoto', item)
            }, 1000)
        }
    }
}