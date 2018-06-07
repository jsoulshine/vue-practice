import Main from '@/views/Main.vue';
import vue_router from './modules/_vue.skills';
import js_router from './modules/_js.skills';
import h5_router from './modules/_h5.skills';

//其他router
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
}
//...
//ejs引入错误页面

export const vueSkillRouter = vue_router;
export const jsSkillRouter = js_router;
export const h5SkillRouter = h5_router;

export const routers = [
    loginRouter,
    ...vueSkillRouter,
    ...jsSkillRouter,
    ...h5SkillRouter
]