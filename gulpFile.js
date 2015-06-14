var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    uglifycss= require('gulp-uglifycss'),
    htmlmin = require('gulp-htmlmin');

gulp.task('scripts', function(){
	gulp.src('views/js/*.js').pipe(uglify())
	.pipe(gulp.dest('views/minjs'));
	//gulp.src('views')
});

gulp.task('styles', function(){
	gulp.src('views/css/*.css')
	.pipe(uglifycss())
	.pipe(gulp.dest('views/mincss'));
});

gulp.task('html', function() {
  	return gulp.src('views/*.html')
    .pipe(htmlmin({
    	collapseWhitespace: true,
    	removeComments: true,
    }))
    .pipe(gulp.dest('views/longhtml'));
});
  	/*gulp.src('views/*.html')
    .pipe(htmlmin({
    	collapseWhitespace: true,
    	removeComments: true,
    }))
    .pipe(gulp.dest('views/minhtml'));
});*/

gulp.task('default', ['scripts', 'styles', 'html']);