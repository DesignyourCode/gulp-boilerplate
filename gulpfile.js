var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    sassGlob = require('gulp-sass-glob'),
    livereload = require('gulp-livereload');

var paths = {
    styles: {
        src: './assets/styles',
        files: './assets/styles/scss/**/*.scss',
        dest: './assets/styles/'
    }
}

gulp.task('sass', function() {
  gulp.src(paths.styles.files)
    .pipe(plumber({
        errorHandler: notify.onError("Sass Error: <%= error.message %>")}
    ))
    .pipe(sassGlob())
    .pipe(sass({
        outputStyle: 'compressed',
        sourceComments: false,
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
    gulp.src('./*.html')
        .pipe(livereload());
});

gulp.task('img', function() {
    gulp.src(['./assets/img/*.*'])
        .pipe(livereload());
});

// JS
var scripts = [
    './assets/lib/src/vendor/*.js',
    './assets/lib/src/*.js'
];

gulp.task('concat', function() {
    return gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .on('error', function errorHandler (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./assets/lib/'))
});

gulp.task('watch', function() {
    /*
     * @todo - Enable watch for new files
     * @todo - Handle watch when files are deleted
     */
    
    gulp.watch(paths.styles.files, ['sass']);
    gulp.watch(scripts, ['concat']);
    gulp.watch('./*.html', ['html']);
    gulp.watch('./assets/img/*.*', ['img']);

    livereload.listen();
});

gulp.task('default', ['watch', 'concat', 'serve']);
