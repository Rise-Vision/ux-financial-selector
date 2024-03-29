// //////////////
// Required
// //////////////
var gulp = require('gulp');
var browserSync = require('browser-sync');
var modRewrite  = require('connect-modrewrite');
var	uglify = require("gulp-uglify");
var	rename = require('gulp-rename');

// //////////////
// Browser-Sync
// //////////////

gulp.task('browser-sync', function() {
  browserSync({
    startPath: 'index.html',
    server: {
      baseDir: './'
    }
  });
});

gulp.task('browser-sync-reload', function() {
  console.log('browser-sync-reload');
  browserSync.reload();
});

// //////////////
// Scripts Task
// //////////////

gulp.task('scripts', function(){
	gulp.src('bower_components/rv-common-style/dist/css/*.css')
	.pipe(gulp.dest('css'));
});

// //////////////
// Watch Task
// //////////////

gulp.task('watch', function(){
	gulp.watch('bower_components/rv-common-style/dist/css/*.css', ['scripts','browser-sync-reload']);
});

// //////////////
// Default Task
// //////////////
gulp.task('default',['scripts','watch','browser-sync']);