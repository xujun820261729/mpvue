import Vue from 'vue'
import App from './App'
import './css/app.css'
import store from './store';
import fly from './utils/fly'
import '../static/weui/weui.css'

// 关闭vue的提示
Vue.config.productionTip = false;

// 根实例对象
App.mpType = 'app';

// 全局注册store方法
Vue.prototype.$store = store;

// 引入fly方法
Vue.prototype.$fly = fly;

// 抛出APP
const app = new Vue({
  App
})

// 挂在到全局
app.$mount();
