// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/index'
import {store} from './store/index'
//import bootstrap
import $ from 'jquery' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//import iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
//   components: { App },// 两者皆可
  render: h => h(App),
  template: '<App/>'
})
