

const baseRoutes = [{
  path: '/',
  redirect: '/home'
},{
  path: '/home',
  name: 'home',
  component: () => import('@/view/home'),
  meta:{
    title:'项目已'
  },
  children: [
    {
      path: '/home/r',
      name: 'homer',
      component: () => import('@/view/homer'),
      meta:{
        title:'项目2'
      },
      children: [
        {
          path: '/home/s',
          name: 'homers',
          component: () => import('@/view/homers'),
          meta:{
            title:'项目3'
          },
        }
      ]
    }
  ]
}]

export default baseRoutes