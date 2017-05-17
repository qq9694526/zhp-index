import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
