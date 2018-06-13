const actions = {
    incrementAsync(context){
        setTimeout(() => {
            context.commit('increment');
        }, 1000)
    },
    decrementAsync({state,commit}, n){
        setTimeout(() => {
            alert('count:' + state.count)
            commit('decrement', n);
        }, 1000)
    }
};

export default actions;