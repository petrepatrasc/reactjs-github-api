var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./src/css/*.scss')
        .pipe(sass())
        .on('error', function(err){ console.log(err.message); })
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('browserify', function () {
    gulp.src('src/js/main.js')
        .pipe(browserify({transform: 'reactify'}))
        .on('error', function(err){ console.log(err.message); })
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));

    gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['sass', 'browserify', 'copy']);

gulp.task('watch', function () {
    gulp.watch('src/**/*.*', ['default'])
        .on('error', function(err){ console.log(err.message); });
})
