module.exports = function (grunt) {
	grunt.initConfig({
		shell: {
			gen_cli: {
				command: ['cat cli.js > ../../../../sass-eo-cli.js'].join('&&'),
			},
		},
	});

	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('generate-sasseo-cli', ['shell:gen_cli']);
	console.log('\n"sass-eo-cli.js" generated in root directory !\n');
};
