var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('styles', function() {
    gulp.src('style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
        .pipe(livereload());
});
// In terminal run “gulp styles”

// watch task:
// every time watch file is saved, named task is run

gulp.task('watch', function() {

    livereload.listen();

    gulp.watch('style.css', ['styles']);
});
// In terminal run “gulp watch”
