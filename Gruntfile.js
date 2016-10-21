var jpegtran = require('imagemin-jpegtran');
var mozjpeg = require('imagemin-mozjpeg');
var fs = require('fs');

module.exports = function(grunt) {

	grunt.initConfig({
		htmllint: {
			dev: ["out/**/*.html"]
		},
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			dist: {
				expand: true,
				cwd: 'out/',
				src: ['**/*.html'],
				dest: 'build/'
			}
		},
		cssmin: {   
			options: {
				rebase: false
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'out/',
					src: ['**/*.css'],
					dest: 'build/'
				}]
			}
		},
		image: {
			options: {
				pngquant: true,
				optipng: false,
				zopflipng: true,
				jpegRecompress: false,
				jpegoptim: true,
				mozjpeg: true,
				gifsicle: true,
				svgo: true
			},
			dist: {
				expand: true,
				cwd: 'out/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'build/'
			}
		},
		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd: 'out/',
					src: '**/*.js',
					dest: 'build/'
				}]
			}
		},
		copy: {
			dev: {
				files: [{
					src: 'runtime/styles/default.css',
					dest: 'out/kuhnidialog.bg/styles/default.css'
				}, {
					src: 'runtime/styles/default.css',
					dest: 'out/kitchensdialog.com/styles/default.css'
				}, {
					src: 'runtime/styles/default.css',
					dest: 'out/kuhnidialog.ru/styles/default.css'
				}, {
					src: 'runtime/styles/default.css',
					dest: 'out/kuechendialog.com/styles/default.css'
				}]
			}
		},
		sync: {
			dist: {
				files: [{
					cwd: 'out/',
					src: ['**/*.xml', '**/*.ico', '**/*.svg', '**/.htaccess', '**/*.ttf', '**/*.woff', '**/*.eot', '**/*.pdf'],
					dest: 'build/'
				}]
			}
		},
		rsync: {
			options: {
				args: ['--chmod a+r'],
				recursive: true
			},
			dist: {
				options: {
					src: 'build/',
					dest: '/var/www/',
					host: 'kuhnidialog@kuhnidialog.bg'
				}
			}
		},
		newer: {
			options: {
				cache: 'runtime'
			}
  		}
	});

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-rename');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-mega-image');
	grunt.loadNpmTasks('grunt-html');
	grunt.loadNpmTasks('grunt-sync');
	grunt.loadNpmTasks('grunt-rsync');

	grunt.registerTask('compile', ['less:dev', 'copy:dev']);
	grunt.registerTask('build', ['newer:htmlmin:dist', 'newer:cssmin:dist', 'newer:uglify:dist', 'imagemin:dist', 'sync:dist']);
	grunt.registerTask('deploy', ['rsync']);
	grunt.registerTask('default', ['htmllint', 'newer:htmlmin:dist', 'newer:cssmin:dist', 'newer:uglify:dist', 'newer:image:dist', 'sync:dist']);
};