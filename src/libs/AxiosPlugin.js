require('es6-promise').polyfill() // 引入一次就行  axios需要浏览器支持promise(兼容IE8)
import axios from 'axios';
import store from '@/store/index';


// 创建 axios 实例
// 这里 export  的原因是方便组件外使用 axios
export const Axios = axios.create({
    // baseURL: 'xxx', 
    timeout: 5000,
});

Axios.interceptors.request.use(config => {
    if (store.state.user.token) {
        config.headers.Authorization = 'Bearer ' + store.state.user.token
    }
    return config
},error =>{
    alert("error params", 'fail')
    return Promise.reject(error)
})

Axios.interceptors.response.use(res => {
	const {data} = res;
	let code = data.code ? data.code * 1 : 200;
	data.code = code;
	return data;
}, error => {
	console.log('Network error, please try again later.');
	return Promise.reject(error);
});

// 将 Axios 实例添加到Vue的原型对象上
export default {
    install(Vue) {
      Object.defineProperty(Vue.prototype, '$http', { value: Axios })
    }
  }

