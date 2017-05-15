var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    sassGlob = require('gulp-sass-glob'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

var paths = {
    html: {
        src:   '/',
        files: '*.html'
    },
    images: {
        src:   'assets/img',
        files: 'assets/img/**/*.*'
    },
    styles: {
        src:   'assets/styles/scss',
        files: 'assets/styles/scss/**/*.scss',
        dest:  'assets/styles'
    },
    scripts: {
        src: 'assets/lib/src',
        files: ['assets/lib/src/vendor/*.js', 'assets/lib/src/*.js'],
        dest: 'assets/lib'
    }
};

// ========================================
// -- SASS Compilation
// ========================================
gulp.task('styles', function() {
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
    .pipe(browserSync.stream());
});

// ========================================
// -- JavaScript Compilation
// ========================================
gulp.task('scripts', function() {
    return gulp.src(paths.scripts.files)
        .pipe(concat('app.js'))
        .on('error', function errorHandler (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
});

// ========================================
// -- HTML
// ========================================
gulp.task('html', function () {
    gulp.src(paths.html.files)
        .pipe(browserSync.stream());
});

// ========================================
// -- Images
// ========================================
gulp.task('images', function () {
    gulp.src(paths.images.files)
        .pipe(browserSync.stream());
});

// ========================================
// -- Serve and Reload
// ========================================
gulp.task('serve', function(callback) {
    browserSync.init({
        port: 8000,
        server: './'
    });

    gulp.watch(paths.styles.files, ['styles']);
    gulp.watch(paths.scripts.files, ['scripts']);
    gulp.watch(paths.images.files, ['images']);
    gulp.watch(paths.html.files, ['html']);
});

gulp.task('default', ['serve']);
