var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var eyeglass = require('eyeglass');

gulp.task('sass', function () {
  gulp.src("styles/sass/*.scss")
    .pipe(sass(eyeglass()))
//    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest("styles"));
});

gulp.task('default',function() {
    gulp.watch('styles/sass/*.scss',['sass']);
});