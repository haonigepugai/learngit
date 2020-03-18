import Vue from 'vue'
import App from './App.vue'


//引入
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//1创建组件

import Origin from './components/first page/Origin.vue';


//2配置路由

const routes =[
  {path: '/origin',component:Origin}
]

//3实例化VueRouter
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
