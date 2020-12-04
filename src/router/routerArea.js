export default [
    {
        path: '/area',
        component: () => import('../views/area/Index'),
        children: [
            {
                name: 'Area 51',
                path: '',
                component: () => import('../views/area/Area'),
                children: [
                    {
                        name: 'Componente 1',
                        path: 'comp1',
                        component: () => import('../views/area/pages/Component1')
                    },
                    {
                        name: 'Componente 2',
                        path: 'comp2',
                        component: () => import('../views/area/pages/Component2')
                    }
                ]
            },

        ]
    }
]