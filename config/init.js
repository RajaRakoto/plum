module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		shell: {
			init: {
				command: [
					'cd ./node_modules/@raja_rakoto/sass-eo/config',
					'cat tasks.js > ../../../../gruntfile.js',
				].join('&&'),
			},
		},
	});

	grunt.registerTask('sass-eo-init', ['shell:init']);
};
