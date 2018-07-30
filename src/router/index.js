import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
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
        }
      ]
    }
  ]
})
