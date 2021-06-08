import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    name: 'home',
    component: () => import('@/view/home'),
    children: [
      {
        path: '/home/r',
        name: 'homer',
        component: () => import('@/view/homer'),
        children: [
          {
            path: '/home/s',
            name: 'homers',
            component: () => import('@/view/homers')
          }
        ]
      }
    ]
  }]
})