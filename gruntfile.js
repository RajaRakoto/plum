/**
 * @author: Raja
 * @description: a gruntfile.js template for setting up a basic GRUNT task runner based environment to quickly integrate and use in a project
 * @requires: npm install grunt load-grunt-tasks grunt-shell --save-dev
 * @dependencies: grunt shell:install_deps
 */
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt); // grunt plugins loader

	// all files destination
	const backupsDestination = './backups/';

	// node-glob syntax
	const includeAllFiles = ['**/*', '.*/**/*', '**/.*', '**/.*/**/*'];

	/**
	 * ~ ALL GRUNT PLUGINS CONFIG ~
	 */
	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),

		// TODO: verified
		/**
		 * Compile sass to css
		 */
		sass: {
			test: {
				options: {
					style: 'compressed', // output style: compact, expanded, compressed
				},
				files: [
					// scss file list
					{
						src: ['./test/main.scss'],
						dest: './test/style.css',
					},
				],
			},
		},

		// TODO: inused
		/**
		 * Run shell commands
		 */
		// shell: {
		// 	install_deps: {
		// 		command: install_plugins_cmd.join('&&'),
		// 	},
		// },

		// TODO: verified
		/**
		 * Compress files and folders (incremental backup)
		 */
		compress: {
			main: {
				options: {
					archive: backupsDestination + 'main.tar.gz',
				},
				files: [{ src: ['./*', './.*'] }],
				filter: 'isFile',
			},
			modules: {
				options: {
					archive: backupsDestination + 'node_modules.tar.gz',
				},
				expand: true,
				cwd: './node_modules/',
				src: includeAllFiles,
				dest: 'node_modules',
			},
			test: {
				options: {
					archive: backupsDestination + 'test.tar.gz',
				},
				expand: true,
				cwd: './test/',
				src: includeAllFiles,
				dest: 'test',
			},
			docs: {
				options: {
					archive: backupsDestination + 'docs.tar.gz',
				},
				expand: true,
				cwd: './docs/',
				src: includeAllFiles,
				dest: 'docs',
			},
			frameworks: {
				options: {
					archive: backupsDestination + 'frameworks.tar.gz',
				},
				expand: true,
				cwd: './modules/frameworks/',
				src: includeAllFiles,
				dest: 'frameworks',
			},
			libs: {
				options: {
					archive: backupsDestination + 'libs.tar.gz',
				},
				expand: true,
				cwd: './modules/libs/',
				src: includeAllFiles,
				dest: 'libs',
			},
			maps: {
				options: {
					archive: backupsDestination + 'maps.tar.gz',
				},
				expand: true,
				cwd: './modules/maps/',
				src: includeAllFiles,
				dest: 'maps',
			},
		},

		// TODO: verified
		/**
		 * Run predefined tasks whenever watched file patterns are added, changed or deleted
		 */
		watch: {
			sass: {
				files: ['./test/*.scss'], // src listening
				tasks: ['sass-task'], // default task to execute
				options: { spawn: false }, // watch optimization
			},
		},
	});

	// grunt basics tasks
	grunt.registerTask('sass-task', ['sass:test']); // watched

	// grunt mixed tasks
	grunt.registerTask('compress-all', [
		'compress:main',
		'compress:modules',
		'compress:test',
		'compress:docs',
		'compress:frameworks',
		'compress:libs',
		'compress:maps',
	]);

	// grunt watched tasks
	grunt.registerTask('watch-sass', ['watch:sass']);

	// grunt shell & others tasks
	grunt.registerTask('grunt-deps', ['shell:install_deps']);

	// arrays basics tasks
	const basicsTaskNames = [
		'sass-task',
		'shell-task',
	];
	const basicsTaskStatus = [
		'sass:test',
		'shell:dev',
	];

	// arrays mixed tasks
	const mixedTaskNames = ['compress-all'];
	const mixedTaskStatus = [
		'(compress:main | compress:modules | compress:test | compress:docs | compress:frameworks | compress:libs | compress:maps)',
	];

	// arrays watched tasks
	const watchedTaskNames = ['watch-sass'];
	const watchedTaskStatus = ['watch:sass'];

	// arrays others tasks
	const othersTaskNames = [];
	const othersTaskStatus = [];

	// default tasks
	grunt.registerTask('default', () => {
		console.log(
			'\nHere are the lists of plugins (tasks) you can run with grunt:'.green,
		);

		/**
		 *
		 * @param {string} taskTitle - task title (Eg: basics tasks)
		 * @param {array} taskNames - task names (Eg: basicsTaskNames)
		 * @param {array} taskStatus - task status (Eg: basicsTaskStatus)
		 * @param {string} taskTheme - colors of theme (Eg: black ,red ,green ,yellow ,blue ,magenta ,cyan ,white ,gray ,grey)
		 */
		function getTaskResume(taskTitle, taskNames, taskStatus, taskTheme) {
			switch (taskTheme) {
				case 'cyan':
					console.log(`\n${taskTitle}`.cyan.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.cyan + ` -> ${taskStatus[index]}`);
					});
					break;
				case 'magenta':
					console.log(`\n${taskTitle}`.magenta.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.magenta + ` -> ${taskStatus[index]}`);
					});
					break;
				case 'yellow':
					console.log(`\n${taskTitle}`.yellow.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.yellow + ` -> ${taskStatus[index]}`);
					});
					break;
				case 'blue':
					console.log(`\n${taskTitle}`.blue.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.blue + ` -> ${taskStatus[index]}`);
					});
					break;

				default:
					null;
					break;
			}
		}

		// all tasks resume
		getTaskResume('basics tasks', basicsTaskNames, basicsTaskStatus, 'cyan');
		getTaskResume('mixed tasks', mixedTaskNames, mixedTaskStatus, 'magenta');
		getTaskResume('watched tasks', watchedTaskNames, watchedTaskStatus, 'blue');
		getTaskResume(
			'shell & others tasks',
			othersTaskNames,
			othersTaskStatus,
			'yellow',
		);
	});
};
