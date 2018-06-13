const mutations = {
    increment(state, n){
        state.count += isNaN(n) ? 1 : n
    },
    decrement(state, n){
        state.count -= isNaN(n) ? 2 : n
    }
};

export default mutations;