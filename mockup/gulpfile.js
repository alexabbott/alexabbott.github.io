var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./",
    }
  });

  gulp.watch('./styles/*.scss', ['sass']);
  gulp.watch(['./js/*.js']).on('change', browserSync.reload);
  gulp.watch(['./*.html']).on('change', browserSync.reload);
});

gulp.task('sass', function () {
  gulp.src(['./styles/main.scss'])
    .pipe(sass({
      includePaths: ['./styles/main.scss'],
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./styles/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'serve'], function () { });
