var gulp = require('gulp');
var ojster = require('ojster');


var compileServerTemplates = function(path) {
  ojster.compilePath(path, null, {
    silent: this.false,
    generator: {
      generatorClass: ojster.generators.NodeGenerator,
      indentStr: '  '
    },
    tabSize: 2
  });
};

gulp.task('watch', function() {
  gulp.watch('application/views/**/*.ojst', function(evt) {
    compileServerTemplates(evt.path);
  });
});

gulp.task('serverTemplates', function() {
  compileServerTemplates('application/views');
});
