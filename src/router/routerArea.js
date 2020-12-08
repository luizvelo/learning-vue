export default [
    {
        path: '/area',
        component: () => import('../views/area/Index'),
        children: [
            {
                name: 'Area 51',
                path: '',
                redirect: 'comp/1',
                component: () => import('../views/area/Area'),
                children: [
                    {
                        name: 'Lista',
                        path: 'comp/1',
                        component: () => import('../views/area/pages/Component1')   
                    },
                    {
                        name: '',
                        path: 'comp/2',
                        component: () => import('../views/area/pages/Component2')
                    }
                ]
            },

        ]
    }
]