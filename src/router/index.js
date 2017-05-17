import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/pages/index'
import about from '@/components/pages/about'
import compts from '@/components/pages/compts'

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
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/compts',
      name: 'compts',
      component: compts
    }
  ]
})
