
const utils = {
  // 路由递归
  routesRecursive: function (data) {
    return data.map(item => {
      if (item.children) {
        item.children = utils.routesRecursive(item.children)
      }
      return {
        ...item,
        component: () => import(`@/view/${item.component}`)
      }
    })
  }
}
export default utils