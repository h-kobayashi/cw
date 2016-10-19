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

gulp.task "stylus_common", ->
	gulp.src (["dev/styl/common/*.styl", "!dev/styl/common/_*.styl"])
		.pipe stylus({
			import: ["normalize"],
			use: [normalize()],
			import: ["nib"],
			use: [nib()]
		})
		.pipe gulp.dest "root/css/common/"

gulp.task "stylus_top", ->
	gulp.src (["dev/styl/top/*.styl", "!dev/styl/top/_*.styl"])
		.pipe stylus({
			import: ["normalize"],
			use: [normalize()],
			import: ["nib"],
			use: [nib()]
		})
		.pipe gulp.dest "root/css/top/"

gulp.task "stylus_list", ->
	gulp.src (["dev/styl/list/*.styl", "!dev/styl/list/_*.styl"])
		.pipe stylus({
			import: ["normalize"],
			use: [normalize()],
			import: ["nib"],
			use: [nib()]
		})
		.pipe gulp.dest "root/css/list/"

gulp.task "stylus_detail", ->
	gulp.src (["dev/styl/detail/*.styl", "!dev/styl/detail/_*.styl"])
		.pipe stylus({
			import: ["normalize"],
			use: [normalize()],
			import: ["nib"],
			use: [nib()]
		})
		.pipe gulp.dest "root/css/detail/"

gulp.task "stylus_page", ->
	gulp.src (["dev/styl/page/*.styl", "!dev/styl/page/_*.styl"])
		.pipe stylus({
			import: ["normalize"],
			use: [normalize()],
			import: ["nib"],
			use: [nib()]
		})
		.pipe gulp.dest "root/css/page/"

gulp.task "watch", ->
	gulp.watch ["dev/js/**/*.coffee","dev/pug/**/*.pug","dev/styl/*.styl","dev/styl/common/*.styl","dev/styl/top/*.styl","dev/styl/list/*.styl","dev/styl/detail/*.styl","dev/styl/page/*.styl"], ["coffee","pug","stylus","stylus_common","stylus_top","stylus_list","stylus_detail","stylus_page"]

gulp.task "default", ["watch"]