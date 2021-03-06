// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually
"use strict";
var inherits = require('util').inherits;
var LayoutTemplate = require('../../layout');

var Page = function (opt_data, opt_ctx, opt_writer) {
  LayoutTemplate.call(this, opt_data, opt_ctx, opt_writer);
};
inherits(Page, LayoutTemplate);


Page.prototype.renderBlockContentInternal = function () { // @7:1
  var self = this;
  var d = this.data, vars = this.vars;
  self.writer.write(
    '<h2 id="signin">Авторизация</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/signin</div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>email</code></td><td><code>string</code></td><td>Электронная почта</td></tr><tr><td><code>password</code></td><td><code>string</code></td><td>Пароль</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: {\n    token: string\n  }\n}</pre><p>В случае ошибки выдается ответ со статусом 401 и данными:</p><pre js>{\n  error: {\n    code: <a href=\'',
    this.routePath('datatypes'), // @47:20
    '#ErrorCode_WRONG_USER_OR_PASSWORD\'>ErrorCode.WRONG_USER_OR_PASSWORD</a>',
    '\n  ', // @47:123
    '}\n}</pre><p>В случае успешной авторизации и выдачи токена можно делать запросы и <a href="',
    this.routePath('websockets'), // @51:82
    '">открывать соединение с помощью веб-сокетов</a>.</p><p>В запросах нужно добавлять заголовок:</p><pre>Authorization: Bearer &lt;token&gt;</pre><p>Токен имеет ограниченное время жизни. По его истечению на любой запрос, требующий авторизации, выдается ответ со статусом 401 и данными:</p><pre js>{\n  error: {\n    code: <a href=\'',
    this.routePath('datatypes'), // @60:20
    '#ErrorCode_WRONG_TOKEN\'>ErrorCode.WRONG_TOKEN</a>',
    '\n  ', // @60:101
    '}\n}</pre><p>В соединении с помощью веб-сокетов приходит событие <code><a href="',
    this.routePath('server2client'), // @64:71
    '#error">error</a></code> со следующим содержимым поля <code>error</code>:</p><pre js>{\n  code: <a href=\'',
    this.routePath('datatypes'), // @67:18
    '#ErrorCode_WRONG_TOKEN\'>ErrorCode.WRONG_TOKEN</a>',
    '\n', // @67:99
    '}</pre><p>В случае ошибки нужно снова произвести процедуру авторизации.</p><h2>Регистрация</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/signup</div></div><p>Ответ:</p><pre js>{\n  data: {\n    user: <a href=\'',
    this.routePath('datatypes'), // @82:20
    '#User\'>User</a>',
    '\n  ', // @82:67
    '}\n}</pre>'
  );
}; // @86:1

module.exports = Page;
