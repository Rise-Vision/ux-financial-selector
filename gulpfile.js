var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

/**
 * Server
 */
gulp.task('browser-sync', function() {
    browserSync({
        startPath: 'app/index.html',
        server: {
            baseDir: './'
        }
    });
});

gulp.task('browser-sync-reload', function() {
  console.log('browser-sync-reload');
  browserSync.reload();
});

gulp.task('copy', function () {
     gulp
      .src('app/index.html')
      .pipe(gulp.dest('dist'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files
 */
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['browser-sync-reload']);
    gulp.watch(['*.html']);
});

/**
 * Default task
 */
gulp.task('default', ['browser-sync', 'watch', 'copy']);