import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//解决添加购物车成功后的显示
import toast from './components/common/toast'
//解决移动端300ms的延迟问题
import FastClick from 'fastclick'

//解决图片懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.use(toast)
Vue.use(VueLazyLoad)

FastClick.attach(document.body)

Vue.prototype.$bus=new Vue()
new Vue({
	router,
	store,
	toast,
	mode:'history',
  render: h => h(App),
}).$mount('#app')
