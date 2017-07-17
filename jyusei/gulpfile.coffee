gulp	= require "gulp"
coffee	= require "gulp-coffee"
pug		= require "gulp-pug"
stylus	= require "gulp-stylus"
plumber	= require "gulp-plumber"
prettify= require "gulp-prettify"
nib		= require "nib"
normalize=require "normalize"

gulp.task "coffee", ->
	gulp.src "dev/coffee/**/*.coffee"
		.pipe plumber()
		.pipe coffee()
		.pipe gulp.dest "root/js/"

gulp.task "pug", ->
	gulp.src (["dev/pug/**/*.pug", "!dev/pug/**/_*.pug"])
		.pipe plumber()
		.pipe pug()
		.pipe prettify()
		.pipe gulp.dest "root/"

gulp.task "stylus", ->
	gulp.src (["dev/styl/**/*.styl", "!dev/styl/**/_*.styl"])
		.pipe stylus({
			import: ["normalize"],
			use: [normalize()],
			import: ["nib"],
			use: [nib()]
		})
		.pipe gulp.dest "root/css/"


gulp.task "watch", ->
	gulp.watch ["dev/js/**/*.coffee","dev/pug/**/*.pug","dev/styl/**/*.styl"], ["coffee","pug","stylus"]

gulp.task "default", ["watch"]