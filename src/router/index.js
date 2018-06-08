import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import {routers} from './router';
import Util from '../libs/util';
import Cookies from 'js-cookie';

Vue.use(VueRouter);
//路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers   //routes  而不是routers ！！！！
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    let toTitle = to.meta.title;
    Util.changePageTitle(toTitle);

    if (!Cookies.get('account') && to.name !== 'login') {  // 判断是否已经登录且前往的页面不是登录页
        next({
            name: 'login'  //对应路由中的name值
        });
    }else{
        next();
        iView.LoadingBar.finish();
    }



    window.scrollTo(0, 0);
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


