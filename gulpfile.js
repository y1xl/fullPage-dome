var gulp = require('gulp')

gulp.task('default',function(){
	gulp.src('./index.html')
		.pipe(gulp.dest('dist/'));
})

gulp.task('start',function(){
	gulp.watch('./index.html',['default']);
	
})