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
    '<h2>Получение данных о пользователе</h2><div class=\'request\'><div class=\'method\'>GET</div><div class=\'path\'>/v201405/me</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @12:40
    '#signin">авторизация</a></div></div><p>Ответ:</p><pre js>{\n  data: {\n    user: <a href="',
    this.routePath('datatypes'), // @18:20
    '#MyUser">MyUser</a>',
    '\n  ', // @18:71
    '}\n}</pre><h2>Обновление настроек фильтра текущего пользователя</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/filter/update</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @27:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>cityIds</code></td><td><code>string=</code></td><td>Идентификаторы <a href="',
    this.routePath('datatypes'), // @42:35
    '#City">городов</a>, разделенных запятыми</td></tr><tr><td><code>genders</code></td><td><code>string=</code></td><td>Идентификаторы <a href="',
    this.routePath('datatypes'), // @47:35
    '#Gender">полов</a>, разделенных запятыми</td></tr><tr><td><code>maxAge</code></td><td><code>uint=</code></td><td>Максимальный возраст</td></tr><tr><td><code>minAge</code></td><td><code>uint=</code></td><td>Минимальный возраст</td></tr><tr><td><code>viewType</code></td><td><code><a href="',
    this.routePath('datatypes'), // @61:26
    '#FilterViewType">FilterViewType</a>=</code></td><td>Режим просмотра пользователей</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: {\n    filter: <a href="',
    this.routePath('datatypes'), // @70:22
    '#Filter">Filter</a>',
    '\n  ', // @70:73
    '}\n}</pre><h2>Добавление достижения в карьере</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/career/add</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @79:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>companyId</code></td><td><code>uint=</code></td><td>Идентификатор <a href="',
    this.routePath('datatypes'), // @94:34
    '#Company">компании</a></td></tr><tr><td><code>companyName</code></td><td><code>string=</code></td><td>Название <a href="',
    this.routePath('datatypes'), // @99:29
    '#Company">компании</a></td></tr><tr><td><code>fromYear</code></td><td><code>uint=</code></td><td>Год начала</td></tr><tr><td><code>postId</code></td><td><code>uint=</code></td><td>Идентификатор <a href="',
    this.routePath('datatypes'), // @109:34
    '#CareerPost">должности</a></td></tr><tr><td><code>postName</code></td><td><code>string=</code></td><td>Название <a href="',
    this.routePath('datatypes'), // @114:29
    '#CareerPost">должности</a></td></tr><tr><td><code>toYear</code></td><td><code>uint=</code></td><td>Год окончания</td></tr></tbody></table><p>Одно из двух полей — <code>companyId</code> и <code>companyName</code> — обязательно.</p><p>Ответ:</p><pre js>{\n  data: {\n    careerItem: <a href="',
    this.routePath('datatypes'), // @128:26
    '#CareerItem">CareerItem</a>',
    '\n  ', // @128:85
    '}\n}</pre><p>В случае пустого значения параметров <code>companyId</code> и <code>companyName</code> или если компания с данным идентификатором не была найдена в базе, выдается ответ со статусом 403 и данными:</p><pre js>{\n  error: {\n    code: <a href=\'',
    this.routePath('datatypes'), // @136:20
    '#ErrorCode_WRONG_PARAMS\'>ErrorCode.WRONG_PARAMS</a>,\n    params: [{\n      code: <a href=\'',
    this.routePath('datatypes'), // @138:22
    '#ErrorCode_REQUIRED\'>ErrorCode.REQUIRED</a>,\n      name: \'company\'\n    }]\n  }\n}</pre><h2>Удаление достижения в карьере</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/career/remove</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @149:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>ids</code></td><td><code>string</code></td><td>Идентификаторы <a href="',
    this.routePath('datatypes'), // @164:35
    '#CareerItem">достижений в карьере</a>, разделенных запятыми</td></tr></tbody></table><p>В ответ выдается список идентификаторов <a href="',
    this.routePath('datatypes'), // @168:53
    '#CareerItem">достижений в карьере</a>, которые были удалены у пользователя:</p><pre js>{\n  data: {\n    ids: Array.&lt;uint&gt;\n  }\n}</pre><h2>Добавление языка</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/languages/add</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @181:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>string</code></td><td>Название языка</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: {\n    language: <a href="',
    this.routePath('datatypes'), // @204:24
    '#Language">Language</a>',
    '\n  ', // @204:79
    '}\n}</pre><p>В случае пустого значения параметра <code>name</code> выдается ответ со статусом 403 и данными:</p><pre js>{\n  error: {\n    code: <a href=\'',
    this.routePath('datatypes'), // @212:20
    '#ErrorCode_WRONG_PARAMS\'>ErrorCode.WRONG_PARAMS</a>,\n    params: [{\n      code: <a href=\'',
    this.routePath('datatypes'), // @214:22
    '#ErrorCode_REQUIRED\'>ErrorCode.REQUIRED</a>,\n      name: \'name\'\n    }]\n  }\n}</pre><h2>Удаление языков</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/languages/remove</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @225:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>ids</code></td><td><code>string</code></td><td>Идентификаторы <a href="',
    this.routePath('datatypes'), // @240:35
    '#Language">языков</a>, разделенных запятыми</td></tr></tbody></table><p>В ответ выдается список идентификаторов <a href="',
    this.routePath('datatypes'), // @244:53
    '#Language">языков</a>, которые были удалены у пользователя:</p><pre js>{\n  data: {\n    ids: Array.&lt;uint&gt;\n  }\n}</pre><h2>Добавление места</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/places/add</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @257:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>cityId</code></td><td><code>uint</code></td><td>Идентификатор <a href="',
    this.routePath('datatypes'), // @272:34
    '#City">города</a></td></tr><tr><td><code>name</code></td><td><code>string</code></td><td>Название места</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: {\n    place: <a href="',
    this.routePath('datatypes'), // @285:21
    '#Place">Place</a>',
    '\n  ', // @285:70
    '}\n}</pre><p>В случае пустого значения параметра <code>name</code> выдается ответ со статусом 403 и данными:</p><pre js>{\n  error: {\n    code: <a href=\'',
    this.routePath('datatypes'), // @293:20
    '#ErrorCode_WRONG_PARAMS\'>ErrorCode.WRONG_PARAMS</a>,\n    params: [{\n      code: <a href=\'',
    this.routePath('datatypes'), // @295:22
    '#ErrorCode_REQUIRED\'>ErrorCode.REQUIRED</a>,\n      name: \'name\'\n    }]\n  }\n}</pre><h2>Удаление мест</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/places/remove</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @306:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>ids</code></td><td><code>string</code></td><td>Идентификаторы <a href="',
    this.routePath('datatypes'), // @321:35
    '#Place">мест</a>, разделенных запятыми</td></tr></tbody></table><p>В ответ выдается список идентификаторов <a href="',
    this.routePath('datatypes'), // @325:53
    '#Place">мест</a>, которые были удалены у пользователя:</p><pre js>{\n  data: {\n    ids: Array.&lt;uint&gt;\n  }\n}</pre><h2 id="addEducation">Добавление образования</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/education/add</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @338:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>fromYear</code></td><td><code>uint=</code></td><td>Год начала обучения</td></tr><tr><td><code>schoolId</code></td><td><code>uint=</code></td><td>Идентификатор <a href="',
    this.routePath('datatypes'), // @358:34
    '#School">учебного заведения</a></td></tr><tr><td><code>schoolName</code></td><td><code>string=</code></td><td>Название <a href="',
    this.routePath('datatypes'), // @363:29
    '#School">учебного заведения</a></td></tr><tr><td><code>specialityId</code></td><td><code>uint=</code></td><td>Идентификатор <a href="',
    this.routePath('datatypes'), // @368:34
    '#Speciality">специальности</a></td></tr><tr><td><code>specialityName</code></td><td><code>string=</code></td><td>Название <a href="',
    this.routePath('datatypes'), // @373:29
    '#Speciality">специальности</a></td></tr><tr><td><code>toYear</code></td><td><code>uint=</code></td><td>Год завершения обучения</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: {\n    educationItem: <a href="',
    this.routePath('datatypes'), // @386:29
    '#EducationItem">EducationItem</a>',
    '\n  ', // @386:94
    '}\n}</pre><p>В случае пустого значения параметров <code>schoolId</code> и <code>schoolName</code> или если учебное заведение с данным идентификатором не была найдено в базе, выдается ответ со статусом 403 и данными:</p><pre js>{\n  error: {\n    code: <a href=\'',
    this.routePath('datatypes'), // @394:20
    '#ErrorCode_WRONG_PARAMS\'>ErrorCode.WRONG_PARAMS</a>,\n    params: [{\n      code: <a href=\'',
    this.routePath('datatypes'), // @396:22
    '#ErrorCode_REQUIRED\'>ErrorCode.REQUIRED</a>,\n      name: \'school\'\n    }]\n  }\n}</pre><h2>Удаление образования</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/education/remove</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @407:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>ids</code></td><td><code>string</code></td><td>Идентификаторы <a href="',
    this.routePath('datatypes'), // @422:35
    '#EducationItem">образования</a>, разделенных запятыми</td></tr></tbody></table><p>В ответ выдается список идентификаторов <a href="',
    this.routePath('datatypes'), // @426:53
    '#EducationItem">образования</a>, которые были удалены у пользователя:</p><pre js>{\n  data: {\n    ids: Array.&lt;uint&gt;\n  }\n}</pre><h2>Загрузка и обновление изображения для аватара</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/avatar/add</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @439:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>image</code></td><td><code>File</code></td><td>Файл изображения</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: {\n    image: <a href="',
    this.routePath('datatypes'), // @462:21
    '#Image">Image</a>',
    '\n  ', // @462:70
    '}\n}</pre><p>В случае неправильного формата файла выводится ошибка со статусом 403:</p><pre js>{\n  error: {\n    code: <a href=\'',
    this.routePath('datatypes'), // @470:20
    '#ErrorCode_WRONG_FILE_FORMAT\'>ErrorCode.WRONG_FILE_FORMAT</a>',
    '\n  ', // @470:113
    '}\n}</pre><p>В случае слишком большого размера файла выводится ошибка со статусом 403:</p><pre js>{\n  error: {\n    code: <a href=\'',
    this.routePath('datatypes'), // @478:20
    '#ErrorCode_TOO_LARGE_FILE\'>ErrorCode.TOO_LARGE_FILE</a>',
    '\n  ', // @478:107
    '}\n}</pre><p>В случае слишком маленького размера изображения выводится ошибка со статусом 403:</p><pre js>{\n  error: {\n    code: <a href=\'',
    this.routePath('datatypes'), // @486:20
    '#ErrorCode_TOO_SMALL_SIZE\'>ErrorCode.TOO_SMALL_SIZE</a>',
    '\n  ', // @486:107
    '}\n}</pre><h2>Кроп аватара</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/avatar/crop</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @495:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>height</code></td><td><code>uint</code></td><td>Высота</td></tr><tr><td><code>left</code></td><td><code>uint</code></td><td>Координата левого верхнего угла по горизонтали</td></tr><tr><td><code>top</code></td><td><code>uint</code></td><td>Координата левого верхнего угла по вертикали</td></tr><tr><td><code>width</code></td><td><code>uint</code></td><td>Ширина</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: {\n    avatar: <a href="',
    this.routePath('datatypes'), // @533:22
    '#Avatar">Avatar</a>',
    '\n  ', // @533:73
    '}\n}</pre><p>В случае отсутствия изображения для кропа выдается <a href="',
    this.routePath('http'), // @537:64
    '#error404">ошибка со статусом 404</a>.</p><p>В случае слишком маленького размера области кропа выводится ошибка со статусом 403:</p><pre js>{\n  error: {\n    code: <a href=\'',
    this.routePath('datatypes'), // @542:20
    '#ErrorCode_TOO_SMALL_SIZE\'>ErrorCode.TOO_SMALL_SIZE</a>',
    '\n  ', // @542:107
    '}\n}</pre><h2>Список фотографий</h2><div class=\'request\'><div class=\'method\'>GET</div><div class=\'path\'>/v201405/me/photos</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @551:40
    '#signin">авторизация</a></div></div><p>Ответ:</p><pre js>{\n  data: {\n    photos: Array.&lt;<a href="',
    this.routePath('datatypes'), // @557:32
    '#Photo">Photo</a>&gt;\n  }\n}</pre><h2>Упорядочивание фотографий</h2><div class=\'request\'><div class=\'method\'>POST</div><div class=\'path\'>/v201405/me/photos/sort</div><div class=\'auth\'>Требуется <a href="',
    this.routePath('auth'), // @566:40
    '#signin">авторизация</a></div></div><table class=\'params\'><caption>POST параметры</caption><thead><tr><th>Название</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code>ids</code></td><td><code>JSON(Array.&lt;uint&gt;)</code></td><td>Идентификаторы фотографий, разделенные запятой</td></tr></tbody></table><p>Ответ:</p><pre js>{\n  data: {\n    photos: Array.&lt;<a href="',
    this.routePath('datatypes'), // @589:32
    '#Photo">Photo</a>&gt;\n  }\n}</pre>'
  );
}; // @593:1

module.exports = Page;
