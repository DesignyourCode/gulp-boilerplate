var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify');

var paths = {

    styles: {
        src: './assets/styles',
        files: './assets/styles/scss/**/*.scss',
        dest: './assets/styles/'
    }

}

gulp.task('sass', function() {
  gulp.src(paths.styles.files)
    .pipe(sass({
      outputStyle: 'compressed',
      sourceComments: 'map',
      includePaths: [paths.styles.src],
      errLogToConsole: true
    }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(livereload());
});

gulp.task('serve', function(done) {
  var port = 4000;
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname + '/'));
  app.listen(port, 'localhost', function () {
     done();
  });
  console.log('Site served on http://localhost:' + port)
});

gulp.task('html', function() {
  gulp.src('./**/*.html')
    .pipe(livereload());
});

gulp.task('img', function() {
  gulp.src(['./assets/img/*.*'])
    .pipe(livereload());
});

gulp.task('js', function() {
  gulp.src('./assets/lib/*.js')
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch(paths.styles.files, ['sass']);
  gulp.watch('./**/*.html', ['html']);
  gulp.watch('./assets/lib/*.js', ['js']);
  gulp.watch('./assets/img/*.*', ['img']);

  livereload.listen();
});

gulp.task('default', ['watch', 'serve']);
