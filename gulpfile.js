var gulp = require('gulp');
var ojster = require('ojster');

gulp.task('watch', function() {
  gulp.watch('application/view/**/*.ojst', function(evt) {
    ojster.compilePath(evt.path, null, {
      silent: false,
      generator: {
        generatorClass: ojster.generators.NodeGenerator,
        indentStr: '  '
      },
      tabSize: 2
    });
  });
});
