export default [
  {
    path: '/todo',
    component: () => import('../views/todo/Index'),
    children: [
      {
        name: 'Todos',
        path: '',
        component: () => import('../views/todo/Todo'),
      }
    ]
  },
];