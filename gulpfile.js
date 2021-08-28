const gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({
            suffix: ".min",
          }))
        .pipe(gulp.dest('css/'));
});


gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

function css(cb) {
    // body omitted
        return gulp.src('sass/*.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename({
                suffix: ".min",
            }))
            .pipe(gulp.dest('css/'));
   
    cb();
  }


gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', function(){
    gulp.watch('sass/*.sass', css); 
    // Other watchers
})