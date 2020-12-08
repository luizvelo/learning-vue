export default {
    namespaced: true,
    state: {
        active_tab: 0,
        tabs: [
            { id: 1, name: "Dados", disabled: false },
            { id: 2, name: "Detalhe", disabled: true },
        ],
        data: {},
        link: null,
        list: [
            {
                id: 1,
                name: 'Neymar Jr.',
                src: 'https://i.pinimg.com/originals/be/a0/57/bea0571b356fa4d2fa8165aa7d92eef1.jpg',
                desc: "Neymar da Silva Santos Júnior, mais conhecido como Neymar ou Neymar Jr. é um futebolista brasileiro que atua como atacante. Atualmente joga pelo Paris Saint-Germain e pela Seleção Brasileira. É considerado o principal futebolista brasileiro da atualidade e um dos melhores futebolistas do mundo."
            },
            {
                id: 2,
                name: 'Cleber Pereira',
                src: 'https://upload.wikimedia.org/wikipedia/commons/6/60/KPereira2008.jpg',
                desc: "Kléber João Boas Pereira, mais conhecido como Kléber Pereira ou apenas Kléber, é um ex-futebolista brasileiro que atuava como atacante. Na maior parte da carreira foi conhecido apenas como Kléber, tornando-se Kléber Pereira depois que chegou em 2007 ao Santos, que já possuía um Kléber no elenco."
            },
        ],
    },
    mutations: {
        verFoto(state, item) {
            state.data = item;
            state.active_tab = 1;
            state.tabs[1].disabled = false;
        },
        setIndexTab(state, tab) {
            state.active_tab = tab.id - 1;
        },
        setChangeTabFoto(state) {
            state.tabs[1].disabled = true;
            state.data = {}
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
        },
        changeActiveTab({ commit }, tab) {
            commit("setIndexTab", tab)
        },
        changeDisableTabFoto({ commit }) {
            commit("setChangeTabFoto")
        }
    }
}