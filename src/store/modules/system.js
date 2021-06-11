const system = {
  state: {
    device: 'desktop',
    menuType: 'sideBar'  // topMenu || sideBar   控制横竖菜单
  },
  mutations: {
    CHANGE_DEVIDE: (state, device) => {
      state.device = device
    }
  },
  actions: {
    changeDevice({ commit }, type) {
      commit('CHANGE_DEVIDE', type)
    }
  }
}

export default system