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
			sseo_docs: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'sassdoc .',
					'cd sassdoc',
					'xdg-open index.html',
				].join('&&'),
			},
			loader_docs: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'cd docs/loader',
					'xdg-open index.html',
				].join('&&'),
			},
			magic_docs: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'cd docs/magic',
					'xdg-open index.html',
				].join('&&'),
			},
			milligrid_docs: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'cd docs/milligrid',
					'xdg-open index.html',
				].join('&&'),
			},
			hamburgers_config: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'cd modules/libs',
					'xdg-open _hamburgers.scss',
				].join('&&'),
			},
			grid_maker: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'cd modules/libs/grid-maker',
					'xdg-open index.html',
				].join('&&'),
			},
			flexbox_maker: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/',
					'cd modules/libs/flexbox-maker',
					'xdg-open index.html',
				].join('&&'),
			},
		},
	});

	// watch
	grunt.registerTask('watch-sass', ['watch:sass']);

	// docs
	grunt.registerTask('sseo-docs', ['shell:sseo_docs']);
	grunt.registerTask('loader-docs', ['shell:loader_docs']);
	grunt.registerTask('magic-docs', ['shell:magic_docs']);
	grunt.registerTask('milligrid-docs', ['shell:milligrid_docs']);

	// config
	grunt.registerTask('hamburgers-config', ['shell:hamburgers_config']);

	//maker
	grunt.registerTask('grid-maker', ['shell:grid_maker']);
	grunt.registerTask('flexbox-maker', ['shell:flexbox_maker']);
};
