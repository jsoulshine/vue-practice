import Main from '@/views/Main.vue';
import vue_router from './modules/_vue.skills';
import js_router from './modules/_js.skills';
import h5_router from './modules/_h5.skills';

//其他router
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    title: 'otherRouter',
    component: Main,
    children: [
        {path: 'home', name: 'home', title: 'Home', component: resolve => {require(['@/views/home/home.vue'], resolve)}},
        {path: 'owner-space/:userName/id/:userId', name: 'owner-space', title: 'Owner Space', component: resolve => {require(['@/views/owner-space/owner-space.vue'], resolve)}}
    ]
}
//登录
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
    otherRouter,
    loginRouter,
    ...vueSkillRouter,
    ...jsSkillRouter,
    ...h5SkillRouter
]