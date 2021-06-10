import Vue from 'vue';
import router from '@/router'
import baseRoutes from '@/router/baseRoutes';
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
    async getMenus({ commit }) {
      let res = await Vue.prototype.$axios.get({
        url: "web/api/news/init"
      })
      let data = utils.routesRecursive(res.data)
      // addRoute 添加的路由不会显示在$router对象中
      router.addRoutes(data)
      commit('SET_ROUTES', data)
    },
  }
}

export default permission