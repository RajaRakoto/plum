module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed',
					loadPath: ['./node_modules/@raja_rakoto/sass-eo'],
				},
				files: {
					// destination: source (example)
					'main.css': 'main.scss',
				},
			},
		},

		watch: {
			sass: {
				files: ['*.scss'],
				tasks: ['sass:dist'],
				options: { spawn: false },
			},
		},

		shell: {
			sassdoc: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'sassdoc .',
					'cd sassdoc',
					'xdg-open index.html',
				].join('&&'),
			},
			loader: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'cd docs/loader',
					'xdg-open index.html',
				].join('&&'),
			},
			magic: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'cd docs/magic',
					'xdg-open index.html',
				].join('&&'),
			},
			hamburgers: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'cd modules/libs',
					'xdg-open _hamburgers.scss',
				],
			},
			grid: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'cd modules/libs/grid-maker',
					'xdg-open index.html',
				],
			},
		},
	});

	grunt.registerTask('watch-sass', ['watch:sass']);
	grunt.registerTask('sseo-docs', ['shell:sassdoc']);
	grunt.registerTask('loader-docs', ['shell:loader']);
	grunt.registerTask('magic-docs', ['shell:magic']);
	grunt.registerTask('config-hamburgers', ['shell:hamburgers']);
	grunt.registerTask('grid-maker', ['shell:grid']);
};
