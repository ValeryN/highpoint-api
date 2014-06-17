module.exports = {
  ip: '127.0.0.1',
  port: 3011,
  navigation: [{
    name: 'main',
    template: 'main',
    title: 'High Point API',
    url: '/',
    childs: [
      {
        scope: 'v201405',
        title: 'Версия от 2014-05',
        childs: [
        {
          title: 'HTTP запросы',
          childs: [
            {
              name: 'settings',
              template: 'v201405/http/settings',
              title: 'Настройки приложения',
              url: '/v201405/http/settings'
            },
            {
              name: 'auth',
              template: 'v201405/http/auth',
              title: 'Авторизация и регистрация',
              url: '/v201405/http/auth'
            },
            {
              name: 'me',
              template: 'v201405/http/me',
              title: 'Текущий пользователь',
              url: '/v201405/http/me'
            },
            {
              name: 'users',
              template: 'v201405/http/users',
              title: 'Пользователи',
              url: '/v201405/http/users'
            },
            {
              name: 'points',
              template: 'v201405/http/points',
              title: 'Поинты',
              url: '/v201405/http/points'
            },
            {
              name: 'geo',
              template: 'v201405/http/geo',
              title: 'Географические локации',
              url: '/v201405/http/geo',
            },
          ],
        },
        {
          name: 'websockets',
          template: 'v201405/websockets',
          title: 'Web-сокеты',
          url: '/v201405/web-sockets',
          childs: [
            {
              name: 'client2server',
              template: 'v201405/websockets/client2server',
              title: 'Команды клиента серверу',
              url: '/v201405/web-sockets/client2server'
            },
            {
              name: 'server2client',
              template: 'v201405/websockets/server2client',
              title: 'События сервера клиенту',
              url: '/v201405/web-sockets/server2client'
            },
          ],
        },
        {
          name: 'datatypes',
          template: 'v201405/datatypes',
          title: 'Типы данных',
          url: '/v201405/data-types',
        },
      ],
      }
    ],
  }],
};
