module.exports = function(grunt) {

	var CONNECT_PORT = 8080;
	var LIVE_RELOAD_PORT = 35729;


	// config
 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			reinstall: [
				'node_modules',
				'css'
			]
		},
		connect: {
			server: {
				options: {
					port: CONNECT_PORT,
					// keepalive: true,
					hostname: 'localhost',
					base: '.',
					livereload: true
				}
			}
		},
		compass: {
			compile: {
				options: {
					config: 'config/compass.rb'
				}
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					// scssファイルの配置フォルダー
					cwd: "scss",
					// scssファイルのマッチパターンの指定
					src: ["**/*.scss"],
					// フォルダーの指定
					dest: "css",
					// 拡張子の指定
					ext: ".css"
				}]
			}
		},
		watch: {
			sass: {
				options: {
					livereload: true,
				},
				files: ['scss/*.scss'],
				tasks: ['sass']
			}
		},
		all: ['Gruntfile.js', 'js/*.js']
	});

	// plugin

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// tasks

	grunt.registerTask('serve', function(environment) {
		grunt.log.write('processing.').ok();
		grunt.task.run([
			'sass',
			'connect:server',
			'watch'
			]);
	});

	grunt.registerTask('default', ['serve']);
};