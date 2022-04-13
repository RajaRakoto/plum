<div align="center">

# ᔕᗩᔕᔕ-EO

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/for-dago.svg?raw=true)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![Sass](https://img.shields.io/badge/-Sass-777?style=flat&logo=sass&logoColor=ffffff&labelColor=%23CC6699) ![JSON](https://img.shields.io/badge/-JSON-777?style=flat&logo=JSON&logoColor=777&labelColor=ffffff) ![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff) ![NPM](https://img.shields.io/badge/-NPM-777?style=flat&logo=npm&labelColor=ffffff) ![Grunt](https://img.shields.io/badge/-Grunt-777?style=flat&logo=grunt&logoColor=orangered&labelColor=ffffff) <br>

| Table of Contents          |
| :------------------------- |
| [Install](#-install)       |
| [Use](#-use)               |
| [Basics](#-basics)         |
| [Libraries](#-libraries)   |
| [Frameworks](#-frameworks) |

</div>

### `📌 Install`

Run the command below to install **sass-eo** with `npm`:

```bash
npm i @raja_rakotonirina/sass-eo --save-dev && npm i grunt grunt-contrib-sass grunt-contrib-watch grunt-shell load-grunt-tasks sassdoc -D
```

<hr>
<br>

### `📌 Use`

Here's how to use **sass-eo** in a project ...

**sass-eo** uses `grunt` as its task runner to make it easy to import its modules from `node_modules`. Thanks to this you can import the module from **sass-eo** when you need it using `@import <module_name>` in any .scss file

After installing **sass-eo**, configure `gruntfile.js` as follows:

- Create `gruntfile.js` in your project root directory

- Copy this configuration template to `gruntfile.js` - you can also change the path (input/output) of your sass file according to your project structure

```js
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt); // grunt plugins loader

	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed', // or expanded or compact
					loadPath: ['./node_modules/@raja_rakotonirina/sass-eo'], // never change this path
				},
				files: {
					// destination: source (example)
					'main.css': 'main.scss',
				},
			},
		},

		watch: {
			sass: {
				// src listening
				files: ['*.scss'],
				// default task to execute
				tasks: ['sass:dist'],
				// watch optimization
				options: { spawn: false },
			},
		},

		/**
		 * Run shell commands
		 */
		shell: {
			sassdoc: {
				// to generate sassdoc
				command: [
					'cd ./node_modules/@raja_rakotonirina/sass-eo/',
					'sassdoc .',
					'cd sassdoc',
					'xdg-open index.html',
				].join('&&'),
			},
		},
	});

	grunt.registerTask('watch-sass', ['watch:sass']);
	grunt.registerTask('sassdoc', ['shell:sassdoc']);
};
```

> **NOTE**: You can change the output style to `expanded` or `compact`, but we suggest `compressed` mode.

[Learn more about Grunt](https://gruntjs.com/getting-started) -> To help you how to use grunt

[grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) -> To help you adapt this configuration file to your own project

- Once the grunt configuration is complete, you can run the command below to `"watch"` changes to the `.scss files` (equivalent to sass --watch `<input_file>.scss`:`<output_file>.css`):

```bash
grunt watch-sass
```

- Here are the lists of `modules` available in **sass-eo** (for now):

> **NOTE**: To import a module, use the following syntax in the .scss file -> **@import '<module_name>'** (Eg: @import 'sass-eo-basics')

      **basics modules**
     sass-eo-basics

      **frameworks modules**
     sass-eo-bootstrap
     sass-eo-bootstrap-grid
     sass-eo-bootstrap-utils
     sass-eo-semantic
     sass-eo-milligrid

      **libraries modules**
     sass-eo-lib-hamburgers
     sass-eo-lib-loader
     sass-eo-lib-magic

<hr>
<br>

### `📌 Basics`

**sass-eo** uses `sassdoc` to create its `documentation` in a snap using `special syntax` to document its basics modules

Run the command below in the root directory of **sass-eo** to `generate & update` the documentation locally (your browser should automatically open the documentation)

```bash
grunt sassdoc
```

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/sassdoc-sc.png?raw=true" width="700">
</div>
<br>

[Learn more about sassdoc](http://sassdoc.com/getting-started/)

<hr>
<br>

##### `📍 Variables`

**sassdoc** does not allow to generate the documentation concerning `variables` containing in certain mixins, that is why we treat them in this section

###### `colors`

Here are the `color swatches` ready to be used by just calling the name of the corresponding `variable`:

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/4web/colors.png?raw=true" width="500"><br>
</div>

<hr>
<br>

### `📌 Libraries`

Here are the lists of built-in `libraries` in **sass-eo**

> **NOTE**: All the documentation related to the libraries can be found in the `./docs` folder

##### `📍Hamburgers`

`Hamburgers` is a collection of tasty hamburger icons animated by CSS. The source is also included as a modular and customizable SASS library, so make your own Hamburgers.

<div align="center">
<img src="http://i.imgur.com/t7cUjDu.gif" width="700">
</div>
<br>

Here is the list of Hamburger-like `classes` you can choose from:

```
  hamburger--3dx
  hamburger--3dx-r
  hamburger--3dy
  hamburger--3dy-r
  hamburger--3dxy
  hamburger--3dxy-r
  hamburger--arrow
  hamburger--arrow-r
  hamburger--arrowalt
  hamburger--arrowalt-r
  hamburger--arrowturn
  hamburger--arrowturn-r
  hamburger--boring
  hamburger--collapse
  hamburger--collapse-r
  hamburger--elastic
  hamburger--elastic-r
  hamburger--emphatic
  hamburger--emphatic-r
  hamburger--minus
  hamburger--slider
  hamburger--slider-r
  hamburger--spin
  hamburger--spin-r
  hamburger--spring
  hamburger--spring-r
  hamburger--stand
  hamburger--stand-r
  hamburger--squeeze
  hamburger--vortex
  hamburger--vortex-r
```

<br>

> **NOTE**: `-r` are reverse variants (e.g. `hamburger--spin` clockwise while `hamburger--spin-r` counter-clockwise.

<br>

**Use:**

**1.** Import hamburgers modules `@import 'sass-eo-lib-hamburgers'`

**2.** Add the corresponding class in your HTML page:

```html
<!-- Trigger the active state by adding the class name `is-active`, just remove it for the inactive state -->
<button class="hamburger hamburger--collapse is-active" type="button">
	<span class="hamburger-box">
		<span class="hamburger-inner"></span>
	</span>
</button>
```

**3.** Since the class name should be toggled with JavaScript:

```js
var hamburger = document.querySelector('.hamburger');
// On click
hamburger.addEventListener('click', function () {
	// Toggle class "is-active"
	hamburger.classList.toggle('is-active');
});
```

<br>

##### `📍Loaders`

`loaders` are collections of mixins used to add a loading effect to each element

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/loader.gif?raw=true" width="700">
</div>
<br>

> **NOTE**: Some loader contains only one color, i-e only 1 argument for the mixin (Example -> `@include loader-10(dodgerblue)`)

<br>

**Use:**

Import loader modules `@import 'sass-eo-lib-loader'`

```scss
// SCSS
#my-loader {
	//use loader-1 with 2 colors as argument (primary, secondary)
	@include loader-1(gold, orangered);
}
```

```html
<!-- HTML - Right after the opening tag <body> -->
<div id="my-loader"></div>
```

```js
// Javascript - this script allows to launch a loder with the id "my-loader" as loading of the web page
const loader = document.getElementById('my-loader');
window.addEventListener('load', () => {
	loader.style.display = 'none';
});
```

<br>

##### `📍Magic`

`Magic` is a built-in CSS animation library in sass-eo, just call a magic mixin to animate an element

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/magic.gif?raw=true" width="700">
</div>
<br>

**Use:**

Import loader modules `@import 'sass-eo-lib-magic'`

```scss
// SCSS - call the magic mixin inside a selector
.cards {
	//The argument of each magic mixin corresponds to its "animation-delay" expressed in seconds
	@include magic-boingInUp(1s);
}
```

<hr>
<br>

### `📌 Frameworks`

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/bootstrap.png?raw=true" width="100"><img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/semantic.png?raw=true" width="100"><img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/milligram.png?raw=true" width="130">
</div>
<br>

- **Bootstrap:** sass-eo integrates the SASS source code of bootstrap 5 in order to partially use its functionalities -> https://getbootstrap.com/docs/5.0/getting-started/introduction/

> **You have 3 choices to use boostrap with sass-eo**

     sass-eo-bootstrap: to use bootstrap minifier version
     sass-eo-bootstrap-grid: to use only the boostrap grid system
     sass-eo-bootstrap-utils: to use only bootstrap utilities

<br>

- **Semantic-ui:** I personally find this framework the best alternative to BT5, sematic-ui facilitates the creation of responsive layouts, one of the advantages of this framework is that it integrates semantic-ui-react , a collection of React components from Semantic-ui

  - semantic-ui -> https://semantic-ui.com/introduction/getting-started.html
  - semantic-ui-react -> https://react.semantic-ui.com/

> sass-eo-semantic: to use the minifier version of semantic-ui

<br>

- **Milligrid:** Milligrid is a configurable and easy to learn CSS flexbox grid system based on Milligram -> http://bencoveney.github.io/Milligrid/

> sass-eo-milligrid: to use the minifier version of milligrid
