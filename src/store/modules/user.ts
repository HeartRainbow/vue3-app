export default {
    namespaced: true,
    state: {
        userName: '',
        userID: '',
        number: 1,
    },
    mutations: {
        SET_NUMBER: (state, number) => {
            state.number = number;
        }
    },
    actions: {
        setNumber: ({commit, state}, number) => {
            console.log(state);
            return commit('SET_NUMBER', number);
        }
    }
}
