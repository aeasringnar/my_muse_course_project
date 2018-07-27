import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
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
      name: 'base',
      redirect: '/home',
      component: () => import('@/views/base'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home')
        }
      ]
    }
  ]
})
