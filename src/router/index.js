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
    component: () => import(/* webpackChunkName: "home" */ '@/view/home'),
    meta: {
      title: '打好后'
    },
    children: [
      {
        path: '/home/r',
        name: 'homer',
        component: () => import(/* webpackChunkName: "home" */ '@/view/homer'),
        children: [
          {
            path: '/home/s',
            name: 'homers',
            component: () => import(/* webpackChunkName: "home" */ '@/view/homers')
          }
        ]
      }
    ]
  }]
})