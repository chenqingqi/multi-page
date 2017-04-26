/**
 * 加载模块
 */
var gulp      = require('gulp');
var rename    = require('gulp-rename');
var less      = require('gulp-less');
var cssmin    = require('gulp-minify-css');


/**
 * 执行命令
 */
gulp.task('default', function() 
{
 	gulp.src(['page/*/css/main.less'])
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('page/'));
});


/**
 * 自动编译
 */
gulp.watch(['page/*/*/*.less','module/*/*.less'],function(event) 
{
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});