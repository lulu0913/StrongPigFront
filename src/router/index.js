import Vue from 'vue'
import Router from 'vue-router'
import BlogLogin from '@/components/manage/BlogLogin'
import User from '@/components/home/User'
// import HelloWorld from '@/components/HelloWorld'
// import User from '@/components/User'
import Leader from '@/components/Leader'
import Manager from '@/components/Manager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/manage',
      redirect: '/login'
    },
    {
      // 注册界面路由
      path: '/login',
      name: 'BlogLogin',
      component: BlogLogin
    },
    {
      // 普通用户界面
      path: '/User',
      name: 'User',
      component: User
    },
    {
      // 用户组长界面
      path: '/Leader',
      name: 'Leader',
      component: Leader
    },
    {
      // 管理员界面
      path: '/Manager',
      name: 'Manager',
      component: Manager
    }
  ]
})
