// @file pug.js
var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var config = require('../config').pug;

gulp.task('pug', function () {
	gulp.src(config.src)
			.pipe(plumber())
			.pipe(pug())
			.pipe(gulp.dest(config.dest))
});