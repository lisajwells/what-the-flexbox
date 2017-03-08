var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('style-START.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('style-START.css', ['styles']);
});
