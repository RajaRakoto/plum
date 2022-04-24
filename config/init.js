module.exports = function (grunt) {

	grunt.initConfig({
		shell: {
			init: {
				command: [
					'cat tasks.js > ../../../../gruntfile.js',
				].join('&&'),
			},
		},
	});

	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('sass-eo-init', ['shell:init']);
	console.log('\n\n"gruntfile.js" generated in root directory !\n\n');
};
