import Vue from 'vue';
import Vuex  from 'vuex';

Vue.use(Vuex);

//new Vuex.Store中的store首字母要大写
export const store = new Vuex.Store({
    state: {
        counter: 1
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        }
    }
})