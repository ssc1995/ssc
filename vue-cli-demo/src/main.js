// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import './style/index.css';


// Vue.component('Slot',Slot);
Vue.filter('capitalize',function(value) {  // 设置全局过滤器
    return '$' + value;
});

 // 使用axios
import ajax from '@/api/ajax';
Vue.prototype.$axios = ajax;

 // 引入echarts视图
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;



Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',  // 实例对象
  router,
  store,
  render:r=>r(App)  // vue2.0 新增
  // components: { App }, // 声明组件
  // template: '<App> </App>', // 使用组件
});

export var Event = new Vue();