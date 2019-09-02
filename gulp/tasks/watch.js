var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create()

gulp.task('cssInject', ['styles'], function () {
  gulp.src('./app/temp/css/style.css')
    .pipe(browserSync.stream());
})

gulp.task('watch', function () {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  })

  watch('./app/**/*.html', function () {
    browserSync.reload()
  })

  watch('./app/assets/css/**/*.css', function () {
    gulp.start('cssInject')
  })
})