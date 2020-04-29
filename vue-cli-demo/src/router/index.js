import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/views/home"
import Mine from "@/views/mine"
import Notfind from '@/views/notfind'
import Index from "@/views/index"
import Side from '@/views/side'
import His from '@/components/history'
import New from "@/components/new"
import Login from "@/views/login"
Vue.use(Router)

  const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/home',  // 重定向到首页页面
    },
    {
      path:'/index',
      name:'index',
      component:Index,
      children:[
        {
          path:'home',
          name:'home',
          component:Home,
          meta:{
            auth:true
          }
        },
        {
          path:'mine',
          name:'mine',
          component:Mine
        },
        {
          path:'/side',
          name:'side',
          component:Side,
          children:[
            {
              path:'new',
              name:'new',
              component:New,
            },
            {
              path:'history',
              name:'history',
              component:His,
            },
          ]
        }
      ]
    },
    {
      path:'/404',
      name:'404',
      component:Notfind,
    },
    {
      path:'/login',
      name:'login',
      component:Login,
    }
  ]

})

router.beforeEach((to,from,next) => {
  if(to.meta.auth){
     if(localStorage.getItem('user')) {
       next();
     } else {
       next({name:'login'})
     }
  } else {
    next();
  }
})

export default router;
