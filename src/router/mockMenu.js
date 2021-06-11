// 模拟路由
export const routes = [
    {
        path: '/test',
        name: 'test',
        component: 'pageLayout',
        hideChildrenInMenu: false,
        meta: {
            title: 'test'
        },
        children: [
            {
                path: '/test/1',
                name: 'test1',
                component: 'testOne',
                hideChildrenInMenu: false,
                meta: {
                    title: 'test1'
                },
                children: [
                    {
                        path: '/test/2',
                        name: 'test2',
                        component: 'testTwo',
                        hideChildrenInMenu: false,
                        meta: {
                            title: 'test2'
                        },
                    },
                    {
                        path: '/test/3',
                        name: 'test3',
                        component: 'testTwo',
                        hideChildrenInMenu: false,
                        meta: {
                            title: 'test3'
                        },
                    }
                ]
            }
        ]
    }, {
        path: '/test4',
        name: 'test4',
        component: 'pageLayout',
        hideChildrenInMenu: false,
        meta: {
            title: 'test4'
        }
    },
    {
        path: '/test5',
        name: 'test5',
        component: 'pageLayout',
        hideChildrenInMenu: false,
        meta: {
            title: 'test5'
        },
        children: [
            {
                path: '/test/6',
                name: 'test6',
                component: 'testOne',
                hideChildrenInMenu: false,
                meta: {
                    title: 'test6'
                },
            },
            {
                path: '/test/7',
                name: 'test7',
                component: 'testOne',
                hideChildrenInMenu: false,
                meta: {
                    title: 'test7'
                },
            }
        ]
    }
]

// 匹配未知路由 重定向404
export const redirect = [{
    path: '*',
    redirect: '/404'
}]


