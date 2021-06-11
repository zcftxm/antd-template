const system = {
  state: {
    device: 'desktop',  
    menuType: 'topMenu'  // topMenu || sideBar   控制横竖菜单
  },
  mutations: {
    CHANGE_DEVIDE: (state, device) => {
      state.device = device
    },
    CHANGE_MENUTYPE: (state, menuType) => {
      state.menuType = menuType
    },
  },
  actions: {
    changeDevice({ commit }, type) {
      commit('CHANGE_DEVIDE', type)
    }
  }
}

export default system