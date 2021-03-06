import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueRouter from 'vue-router';
Vue.use( VueRouter);

import index from './components/index.vue'
import detail from './components/detail.vue'
import user from './components/user.vue'
import userCenter from './components/userCenter.vue'
import userOrder from './components/userOrder.vue'
import userDetail from './components/userDetail.vue'
import login from './components/login.vue'
import axios from 'axios'
 Vue.prototype.$axios=axios;
 axios.defaults.baseURL="http://111.230.232.110:8899"
const routes=[
  {path:'/',redirect:"/index"},//重定向
  {path:'/index',component:index},
  {path:'/detail/:id',component:detail},
  {path:'/user',component:user,
    children:[{
      path:'userCenter',component: userCenter
    },{
      path:'userOrder',component:userOrder
    },{
      path:'userDetail',component:userDetail
    },{
      path:'',redirect:'userCenter'
    }]
},
{path:'/login',component:login}
]

const router=new VueRouter({routes});
// router.beforeEach(){
//   axios.post('http://111.230.232.110:8899/site/account/islogin').then(res=>{
//   if(res.code=='logined'){
//     location='App.vue'
//   }
//   })

// }
import moment from 'moment';
Vue.filter('formatTime',(value)=>{
  moment(value).format('YYYY年MM月DD日');
})

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
