import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import {routers} from './router';

Vue.use(VueRouter);
//路由配置
const RouterConfig = {
    // mode: 'history',
    routers: routers
};

export const router = new VueRouter(RouterConfig);

// router.beforeEach((to, from, next) => {
//     iView.LoadingBar.start();
//     window.scrollTo(0, 0);
// });

// router.afterEach((to, from, next) => {
//     iView.LoadingBar.finish();
//     window.scrollTo(0, 0);
// });


