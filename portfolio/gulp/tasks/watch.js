// @file build.js

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config').watch;

gulp.task('watch', function () {
	// js
	watch(config.ts, function() {
		gulp.start(['ts']);
	});
	
//	watch(config.ts, function () {
//		gulp.start(['webpack']);
//	});
	
	// pug
	watch(config.pug, function () {
		gulp.start(['pug']);
	});
	
	// stylus
	watch(config.styl, function () {
		gulp.start(['stylus']);
	});
});