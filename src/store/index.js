import Vue from 'vue';
import Vuex  from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'
import app from './modules/app.js'
import cart from './modules/cart.js'
import user from './modules/user.js'


Vue.use(Vuex);

//new Vuex.Store中的store首字母要大写
const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        doubleCount: state => state.count * 2,
        quadraCount: (state,getters) => getters.doubleCount * 2,
        funcCount: state => (id) => id + 1
    },
    mutations,
    actions,
    modules: {
        app,
        cart,
        user
    }
})

export default store