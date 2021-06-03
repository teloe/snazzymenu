'use strict';

// Load plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');

// Compile scss into css/ add vendor prefixes/ compress css
function style() {
    return gulp
        .src('app/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

// Minify js
function minifyjs() {
    return gulp
        .src('app/js/snazzymenu.js', { allowEmpty: true })
        .pipe(minify({ noSource: true }))
        .pipe(gulp.dest('dist/js'));
}

// Watch files
function watch() {
    browserSync.init({
        server: {
            baseDir: './app',
            index: '/index.html',
        },
    });
    gulp.watch('app/scss/**/*.scss', style);
    gulp.watch('app/js/**/*.js', minifyjs);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
}

// Export tasks
exports.style = style;
exports.minifyjs = minifyjs;
exports.watch = watch;