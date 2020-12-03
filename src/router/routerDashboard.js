export default [
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/Index'),
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('../views/dashboard/Dashboard'),
      }
    ]
  },
];