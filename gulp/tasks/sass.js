var gulp = require('gulp');
var sass = require('gulp-sass')

// Compile SASS
gulp.task('sass', function () {
    gulp.src(paths.stylesheets)
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});
