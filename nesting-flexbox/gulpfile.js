var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'));
});

// In terminal run “gulp styles”
// watch task:
// every time watch file is saved, named task is run

gulp.task('watch', function() {
    gulp.watch('style.css', ['styles']);
});
