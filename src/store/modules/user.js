import Vue from 'vue';
import Cookies from 'js-cookie';


const user = {
    state: {
        token: ''
    },
    getters: {

    },
    mutations: {
        login: (state, data) => {
			if (data.token) {
				state.token = data.token;
				localStorage.token = data.token;
            }
            if (data.userId) {
                state.userId = data.userId;
				Cookies.set('userId', data.userId, {expires: 7});
            }
            if (data.account) {
                state.account = data.account;
				Cookies.set('account', data.account, {expires: 7});
			}
        },
        logout: (state) => {
            state.token = null;
            Cookies.remove('account');
            Cookies.remove('userId');
            localStorage.clear();
            sessionStorage.clear();
		},
    },
    actions: {

    }
};

export default user;