import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '../store'

Vue.use(Router)

var router = new Router({
  // mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/components/test')
    },
    {
      path: '/',
      name: 'newbase',
      redirect: '/home',
      component: () => import('@/views/newbase'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home')
        },
        {
          path: 'course',
          name: 'course',
          component: () => import('@/views/course')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/login')
        },
        {
          path: 'amap',
          name: 'amap',
          component: () => import('@/views/amap_demo')
        },
        {
          path: 'bmap',
          name: 'bmap',
          component: () => import('@/views/bmap_demo')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/user')
        }
      ]
    }
  ]
})

const whiteList = ['/home','/login','/amap','/bmap','/course']  // 路由白名单，不需要登录的路由放在这里面
// 路由判断。登录验证,如果没有登录，就全部定向到login界面。token就正常访问
router.beforeEach((to,from,next) => {
  if (store.state.token) {
    if (to.path === '/login') { // 如果当前用户输入的是登录路由，那么就定向到 / 路由
      next('/course')
    } else {
      if (!store.state.nickname) { // 判断用户信息是否存在，不存在就拉取用户信息
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          next()
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {  // 发生错误就直接清除token，重新登录
            next({ path: '/login' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
