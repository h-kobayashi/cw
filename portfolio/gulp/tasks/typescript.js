// @file typescript.js
var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var config = require('../config').ts;

gulp.task('ts', function () {
	gulp.src(config.src)
		.pipe(ts())
		.pipe(babel())
		.pipe(uglify())
		.pipe(plumber())
		.pipe(gulp.dest(config.dest))
});