module.exports = {
  ip: '127.0.0.1',
  port: 3011,
  navigation: [{
    name: 'main',
    title: 'High Point API',
    url: '/',
    childs: [
      {
        title: 'Запросы',
        childs: [
          {
            name: 'settings',
            title: 'Настройки приложения',
            url: '/settings'
          },
          {
            name: 'auth',
            title: 'Авторизация и регистрация',
            url: '/auth'
          },
          {
            name: 'me',
            title: 'Текущий пользователь',
            url: '/me'
          },
          {
            name: 'users',
            title: 'Пользователи',
            url: '/users'
          },
          {
            name: 'points',
            title: 'Поинты',
            url: '/points'
          },
        ],
      },
      {
        name: 'websockets',
        title: 'Web-сокеты',
        url: '/web-sockets',
        childs: [
          {
            name: 'client2server',
            title: 'Команды клиента серверу',
            url: '/web-sockets/client2server'
          },
          {
            name: 'server2client',
            title: 'События сервера клиенту',
            url: '/web-sockets/server2client'
          },
        ],
      },
      {
        name: 'datatypes',
        title: 'Типы данных',
        url: '/data-types',
      },
    ],
  }],
};
