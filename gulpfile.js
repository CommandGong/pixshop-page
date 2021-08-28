const gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');
const del = require('del');




function css(cb) {
    // body omitted
        return gulp.src('src/sass/*.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename({
                suffix: ".min",
            }))
            .pipe(gulp.dest('css/'));
   
    cb();
}

function js(cb) {
    // body omitted
    return gulp.src(['src/js/*.js'])
        .pipe(uglify()) 
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js/'));
   
    cb();
}

//gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', function(){
    gulp.watch('src/sass/*.sass', css); 
    gulp.watch('src/js/*.js', js); 
})