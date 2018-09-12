// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/index'
import store from './store/index'
import Cookies from 'js-cookie';
//import bootstrap
import $ from 'jquery' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//import iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import {getOrgChart} from 'jollychic-getorgchart';
import 'jollychic-getorgchart/dist/getorgchart.css';
import vueTool from './libs/vue-tool'
import AxiosPlugin from './libs/AxiosPlugin.js';
import 'vue-orgchart/dist/style.min.css';

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(vueTool);
Vue.use(AxiosPlugin);
console.log(getOrgChart);
// 页面刷新时，重新赋值token    方法二: 将token写在getters中，每次刷新可以自动挂载
if (window.localStorage.token) {
	store.commit('login', {
		token: window.localStorage.token,
		userId: Cookies.get('userId'),
		account: Cookies.get('account')
	});
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
//   components: { App },// 两者皆可
  render: h => h(App),
  template: '<App/>'
})
