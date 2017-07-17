/**
 * A very simple Gulp configuration file
 * Tasks like minification, copy files, linting, ES6 transpilation can be configured here.
 * NOTE: With modern package bundlers like Webpack, gulp and grunt are no longer preferred.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/suggest/suggest.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/suggest/css'))
});
