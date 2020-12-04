export default [
  {
    path: '/todo',
    component: () => import('../views/todo/Index'),
    children: [
      {
        name: 'Lista de tarefas',
        path: '',
        component: () => import('../views/todo/Todo'),
        children: [
          {
            name: 'Nova tarefa',
            path: 'add',
            component: () => import('../views/todo/pages/TodoForm')
          },
          {
            name: 'Editar tarefa',
            path: ':id/edit',
            props: true,
            component: () => import('../views/todo/pages/TodoForm')
          }
        ]
      },

    ]
  },
];