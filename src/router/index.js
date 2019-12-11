import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/components/notFound'
import home from '@/view/home'
import page1 from '@/view/page1'
import page2 from '@/view/page2'
import page3 from '@/view/page3'
import page4 from '@/view/page4'
import side1 from '@/view/page2/side1'
import side2 from '@/view/page2/side2'
import login from '@/view/login'
import register from '@/view/register'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '/page1',
    name: 'page1',
    component: page1
  }, {
    path: '/page2',
    name: 'page2',
    component: page2
  }, {
    path: '/page3',
    name: 'page3',
    component: page3
  }, {
    path: '/page4',
    name: 'page4',
    component: page4
  }, {
    path: '/side1',
    name: 'side1',
    component: side1
  }, {
    path: '/side2',
    name: 'side2',
    component: side2
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/register',
    name: 'register',
    component: register
  }, {
    path: '*',
    name: 'notFound',
    component: notFound,
  }, ]
})
