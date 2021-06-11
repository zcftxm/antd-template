// 页面基础路由
const baseRoutes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: () => import('@/view/pageLayout'),
  meta: {
    title: '项目1'
  },
  children: [
    {
      path: '/home/1',
      name: 'home1',
      component: () => import('@/view/testOne'),
      meta: {
        title: '项目2'
      },
      children: [
        {
          path: '/home/2',
          name: 'home2',
          component: () => import('@/view/testTwo'),
          meta: {
            title: '项目3'
          },
        },
      ]
    }
  ]
}, {
  path: '/404',
  name: '404',
  component: () => import('@/view/404'),
  meta: {
    title: '404'
  }
}]

export default baseRoutes