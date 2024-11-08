const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSaas(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagens () {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}




exports.images = comprimeImagens;

exports.javascript = comprimeJavaScript;

exports.sass = compilaSaas;

exports.watch = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false } , gulp.series(compilaSaas));
}