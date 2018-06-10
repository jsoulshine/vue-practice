import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import {routers} from './router';
import Util from '../libs/util';
import Cookies from 'js-cookie';

Vue.use(VueRouter);
//路由配置
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations. savedPosition通过浏览器的 前进/后退 按钮触发 时才可用
      return savedPosition
    } else {
      const position = {}
      // new navigation.
      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash
      }
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(position)
        }, 500)
      })
    }
  }
  
const RouterConfig = {
    // mode: 'history',
    routes: routers,   //routes  而不是routers ！！！！
    scrollBehavior
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    let toTitle = to.meta.title;
    Util.changePageTitle(toTitle);

    if (!Cookies.get('account') && to.name !== 'login') {  // 判断是否已经登录且前往的页面不是登录页
        next({
            name: 'login',  //对应路由中的name值
            query: {redirect: to.name}  //重新登录后直接跳转
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


