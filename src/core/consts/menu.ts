export const menu = [
  {
    path: '/users',
    name: 'Заявки',
    permission: 'users.list_view',
    icon: 'iconRegistration',
    children: [
      {
        path: '/users/manual',
        name: 'Ручная'
      },
    ]
  },

  {
    path: '/reports',
    name: 'Отчеты',
    permission: 'reports.list_view',
    icon: 'iconReports'
  }
]
