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
    },
    promiseOperate({commit}, n){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment');
                console.log('先加')
                resolve();
            }, 1000);
        })
    },
    operateAsync({dispatch, commit}){
        dispatch('promiseOperate').then(() => {
            commit('decrement');
            console.log('后减')
        })
    }
};

export default actions;