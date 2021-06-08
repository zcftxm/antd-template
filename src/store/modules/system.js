

const system = {
  state: {
    device: 'desktop',
    sidebar: true,
  },
  mutations: {
    CHANGE_DEVIDE: (state, device) => {
      state.device = device
    },
    CHANGE_SIDEBAR: (state, type) => {
      state.sidebar = type
    }
  },
  actions: {
    changeDevice({ commit }, type) {
      commit('CHANGE_DEVIDE', type)
    },
    changeSidebar({ commit }, type) {
      commit('CHANGE_SIDEBAR', type)
    }
  }
}

export default system