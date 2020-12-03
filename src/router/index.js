import Vue from 'vue'
import VueRouter from 'vue-router'
import routesTodo from './routerTodo';
import routesDashboard from './routerDashboard';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routesTodo,
    ...routesDashboard,
    {
      path: '*',
      redirect: '/dashboard'
    }]
})

export default router
