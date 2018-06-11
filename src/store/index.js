import Vue from 'vue';
import Vuex  from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'
import app from './modules/app.js'

Vue.use(Vuex);

//new Vuex.Store中的store首字母要大写
export const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations,
    actions,
    modules: {
        app
    }
})