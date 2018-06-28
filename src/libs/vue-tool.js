
export default {
    install(Vue, opt){
        //vue mixin
        Vue.mixin({
            methods: {
                test(){
                    console.log('这是Vue-Mixin的输出测试 <========');
                }
            }
        });
        //Vue directive
        Vue.directive('border',{
            bind: (el, binding, vnode) => {
                el.style.border = '1px solid blue'
            }
        });
        Vue.directive('htmlRender', {
            bind: function (el, binding, vnode) {
                el.innerHTML = binding.value;
            }
        });
        // Vue.filter
        Vue.filter('formatTime', function (value, format) {
			if (!value) {
				value = new Date().getTime(); //默认当前时间
			}
			// value = value * 1;
			Date.prototype.FormatNha = function (fmt) {
				let o = {
					"M+": this.getMonth() + 1, //月份
					"d+": this.getDate(), //日
					"h+": this.getHours(), //小时
					"m+": this.getMinutes(), //分
					"s+": this.getSeconds(), //秒
					"q+": Math.floor((this.getMonth() + 3) / 3), //季度
					"S+": this.getMilliseconds(), //毫秒
				};
				if (/(y+)/.test(fmt)) {
					fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
				}
				for (let k in o) {
					if (new RegExp("(" + k + ")").test(fmt)) {
						fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
					}
				}
				return fmt;
			};
			if (!format) {
				// 2018-01-08 17:00:31
				format = 'yyyy-MM-dd hh:mm:ss';
			}
			return new Date(value).FormatNha(format);
		});

    }
}