import Vue from 'vue';
import VueRouter from 'vue-router';
import baseRoutes from './baseRoutes';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: baseRoutes
})