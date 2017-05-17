// @file config.js
var path = require('path');
var dest = './build'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src);


module.exports = {
  // 出力先の指定
  dest: dest,
	
	// typescriptの設定
	ts: {
		src: src + '/ts/**',
		dest: dest + '/js/',
		uglify: false
	},

  // webpackの設定
//  webpack: {
//    entry: dest + '/js/sample.js',
//    output: {
//      filename: 'bundle.js'
//    },
//    resolve: {
//      extensions: ['', '.js']
//    }
//  },
	
	// pugの設定
	pug: {
		src: src + '/pug/**',
		dest: dest
	},
	
	// stylusの設定
	stylus: {
		src: src + '/styl/**/!(_)*',
		dest: dest + '/css/',
		output: 'app.css',
		autoprefixer: {
			browsers: ['last 2 versions']
		},
		minify: false
	},
	
	// 監視
	watch: {
		ts: relativeSrcPath + '/ts/**',
		pug: relativeSrcPath + '/pug/**',
		styl: relativeSrcPath + '/styl/**'
	}
}