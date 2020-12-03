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
            name: 'Editar tarefa',
            path: ':id/edit',
            component: () => import('../views/todo/pages/TodoForm')
          }
        ]
      },

    ]
  },
];