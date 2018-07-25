import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 引入路由
import index from './components/index.vue';
import login from './components/login.vue';
import members from './components/members.vue';
import shopcar from './components/shopcar.vue';
// 使用路由中间件
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [{
      path: '/',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/members',
      component: members
    },
    {
      path: '/shopcar',
      component: shopcar
    }
  ]

})
Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  router
})