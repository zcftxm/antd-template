// import Vue from 'vue';
import router from '@/router'
import baseRoutes from '@/router/baseRoutes';
import { routes, redirect } from '@/router/mockMenu';
import utils from '@/utils/util';
const permission = {
  state: {
    routes: baseRoutes,
    addRoutes: []
  },
  getters: {},
  mutations: {
    SET_ROUTES: (state, data) => {
      state.addRoutes = data;
      state.routes = baseRoutes.concat(data)
    }
  },
  actions: {
    // 获取菜单数据
    async getMenus({ commit }) {
      // let res = await Vue.prototype.$axios.get({
      //   url: "web/api/news/init"
      // })
      let data = utils.routesRecursive(routes)
      // addRoute 添加的路由不会显示在$router对象中
      router.addRoutes([...data, ...redirect])
      commit('SET_ROUTES', data)
    },
  }
}

export default permission