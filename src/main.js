import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由
import index from './components/index.vue';
import goodsinfo from './components/goodsinfo.vue';
import login from './components/login.vue';
import members from './components/members.vue';
import shopcar from './components/shopcar.vue';
// 引入comment.js
import moment from "moment";

// 
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// axios 模块
import axios from "axios";
axios.defaults.baseURL="http://47.106.148.205:8899";
Vue.prototype.axios = axios;
// 懒加载
import VueLazyload from 'vue-lazyload';
// 懒加载中间件
Vue.use(VueLazyload,{
  loading: require('./assets/statics/img/01.gif'),
});

Vue.use(ElementUI);

// 使用路由中间件
Vue.use(VueRouter)

Vue.use(iView);
const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    // {
    //   path: '/',
    //   component: index
    // },
    {
      path: '/index',
      component: index
    },
    {
      path: '/goodsinfo/:id',
      component: goodsinfo
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

// 全局过滤器
Vue.filter('cutTime', function (value) {
  return moment(value).format("YYYY-MM-DD");
})
Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  router
})