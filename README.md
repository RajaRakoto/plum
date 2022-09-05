
<div align="center">

<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/sass-eo-ico.png?raw=true" width=128>

# SASS-EO

<img src="https://github.com/RajaRakoto/github-docs/blob/master/dago.gif?raw=true" width=40>

<br>

![Sass](https://img.shields.io/badge/-Sass-777?style=flat&logo=sass&logoColor=ffffff&labelColor=%23CC6699) ![Javascript](https://img.shields.io/badge/-Javascript-777?style=flat&logo=javascript&logoColor=dbb332&labelColor=ffffff) ![JSON](https://img.shields.io/badge/-JSON-777?style=flat&logo=JSON&logoColor=777&labelColor=ffffff) ![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff) ![NPM](https://img.shields.io/badge/-NPM-777?style=flat&logo=npm&labelColor=ffffff) ![Grunt](https://img.shields.io/badge/-Grunt-777?style=flat&logo=grunt&logoColor=orangered&labelColor=ffffff)

[SASS-EO -> Github](https://github.com/RajaRakoto/sass-eo)

<br>

| Table of Contents                               |
| :---------------------------------------------- |
| [Description](#-description)                    |
| [Get started](#-get-started)                    |
| [Contribution](#-contribution)                  |
| [Usage](#-usage)                                |
| [Extension](#-extension)                        |
| [Basics](#-basics)                              |
| [Libraries](#-libraries)                        |
| [Applications](#-applications)                  |
| [Frameworks](#-frameworks)                      |

</div>



---

### `📌 Description`

**sass-eo** is a library of SASS (Syntactically Awesome Style Sheets) mixins and functions, it's a fork of the gerillass project with some changes to make it easier to use, **sass-eo** offers flexibility, speed, performance and creativity in frontend development.

The difference between gerillass and **sass-eo**:

> - Allows faster integration of popular frameworks like `Bootstrap` and its alternative `Semantic-ui`
> - Also contains library collection like `Magic` for animations, `Loaders`, `Hamburgers` menu and many more ...
> - Has an offline web application such as `GRID maker` and `FLEXBOX maker` to manipulate layouts, `BUTTONS maker` and `BOX SHADOW maker` and many others ...
> - Use `Milligrid` for easier CSS layout manipulation (a better alternative to bootstrap grid)
> - More flexible use thanks to `vscode extensions` 



---

### `📌 Get started`

##### `⚫ Initialization`

Before using **sass-eo**, add the following npm script commands to your project's `package.json` file:

```json
"scripts": {
  "sasseo-install": "npm i @raja_rakoto/sass-eo --save-dev",
  "sasseo-deps": "npm i grunt grunt-contrib-sass grunt-contrib-watch grunt-shell load-grunt-tasks sassdoc -D",
  "sasseo-update": "npm update @raja_rakoto/sass-eo",
  "sasseo-init-cli": "grunt --gruntfile ./node_modules/@raja_rakoto/sass-eo/config/gen.cjs generate-sasseo-cli",
  "sasseo-start-cli": "grunt --gruntfile sass-eo-cli.js",
  "sasseo-watch": "grunt --gruntfile sass-eo-cli.js watch-sass",
  "sasseo-docs-basics": "grunt --gruntfile sass-eo-cli.js sseo-docs",
  "sasseo-docs-loaders": "grunt --gruntfile sass-eo-cli.js loaders-docs",
  "sasseo-docs-magic": "grunt --gruntfile sass-eo-cli.js magic-docs",
  "sasseo-docs-milligrid": "grunt --gruntfile sass-eo-cli.js milligrid-docs",
  "sasseo-config-hamburgers": "grunt --gruntfile sass-eo-cli.js hamburgers-config",
  "sasseo-app-gridmaker": "grunt --gruntfile sass-eo-cli.js grid-maker",
  "sasseo-app-flexboxmaker": "grunt --gruntfile sass-eo-cli.js flexbox-maker",
  "sasseo-app-boxshadowmaker": "grunt --gruntfile sass-eo-cli.js boxshadow-maker"
}
```

##### `⚫ Installation`

Run the command below to install **sass-eo**:

```bash
npm run sasseo-install
```

Run the following command to use **sass-eo** dependencies:

```bash
npm run sasseo-deps
```

##### `⚫ Update`

Run the following command to update **sass-eo**:

```bash
npm run sasseo-update
```




---

### 📌 Contribution

🏁 Before contributing, be sure to `install all dependencies` needed to work in this project by running the following command (in root directory):
```bash
npm install
```
🏁 With each new code snippet added, you need to update all `snippets` file and regenerate the documentation, all in one command (in root directory):
```bash
npm run build
```
🏁 You can run a `grunt task` to make a `local backup` of this project by running the following command (in root directory):
```bash
npm run backups
```
🏁 You can run a `grunt task` to watch all `.scss files` of this project by running the following command (in root directory):
```bash
npm run watch
```
🏁 Here is a tool that will help you to generate snippets -> https://snippet-generator.app/

🏁 Then you can make a PR.



---

### `📌 Usage`

Here's how to use **sass-eo** in a project ...

##### `⚫ sass-eo-cli`

**sass-eo-cli** is a command line interface to manage third-party features (sass-watch, generate docs, apps, ...) of **sass-eo**, the latter is based on the `Grunt` task runner, to use it, please run the following command to generate `sass-eo-cli.js` in root directory of your project:

```bash
npm run sasseo-init-cli
```

> **NOTE**: Grunt makes it easy to import modules from `node_modules`. Using this you can import the module from **sass-eo** when you need it using `@import <module_name>` in any .scss file

- Type this command to see all lists of executable commands with **sass-eo-cli**:

```bash
npm run sasseo-start-cli
```

- For example, you can run the command below to observe changes into `.scss files`:

```bash
npm run sasseo-watch
```

##### `⚫ modules`

- Here are the lists of `modules` available in **sass-eo**:

=> To import a module, use the following syntax in `.scss file` -> **@import '<module_name>'** (e.g: `@import 'sass-eo-basics'`)

    **basics modules**
     sass-eo-basics

    **libraries modules**
     sass-eo-lib-hamburgers
     sass-eo-lib-loader
     sass-eo-lib-magic

    **frameworks modules**
     sass-eo-bootstrap
     sass-eo-bootstrap-grid
     sass-eo-bootstrap-utils
     sass-eo-semantic
     sass-eo-milligrid



---

### `📌 Extension`

**sass-eo** has a `vscode` extension to facilitate its use, this extension includes a set of snippets allowing to quickly generate a code to call a mixin or a function of basic modules, libraries or frameworks ...

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/extension-demo.gif?raw=true" width="500">
</div>

##### `⚫ Installation`

You can install it by typing "sass-eo" in the extension tab of your IDE

> **NOTE**: You have 2 extension versions, one in English and one in French (sass-eo-fr)

##### `⚫ Prefix`

The extension of **sass-eo** includes a particular "prefix" to better organize and classify its snippets

Basic syntax for using the extension:

```sass
sseo-[category]-[name] (e.g: sseo-func-color-pastel)
```

**[category]**: represents keywords to quickly identify the snippets to use, here are the lists of keywords

- `animation`
- `bar` (scroll)
- `box` (circle, debug, radius, sizing)
- `button`
- `docs` (only useful in development environment)
- `effect` (box, gradient, opacity, text)
- `tools` (all tools)
- `image` (background, logo, resolution, responsive, retina)
- `import` (sass-eo modules)
- `input` (all, placeholder, style)
- `layout` (clearfix, columnize)
- `lib` (magic, loaders, ...)
- `media` (media queries)
- `nav` (navigation bars)
- `palette` (list color palette as sass variable)
- `position` (block, center, flex, set)
- `spacing` (pattern, margin, padding)
- `specs` (special or unclassified mixins)
- `typo` (font)
- `video` (reactive)

**[name]**: represents the name of a mixin, a function, a library or a framework (ex: normalize, except, ...)

> **NOTE**: you can retain `[category]` or `[name]` to use snippets, the base keyword `sseo` also allows you to list all available snippets for **sass-eo **



---

### `📌 Basics`

Run the command below in the root directory to generate the `basics modules documentation` (your browser should automatically open the documentation)

```bash
npm run sasseo-docs-basics
```

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/sassdoc-sc.gif?raw=true" width="700">
</div>



---

### `📌 Libraries`

Here are the lists of built-in `libraries` in **sass-eo**

##### `⚫ Hamburgers`

`Hamburgers` is a collection of tasty hamburger icons animated by CSS. The source is also included as a modular and customizable Sass library, so make your own Hamburgers.

You can also customize the style (padding, wigth, height, spacing, color, border, opacity, ...) of your `hamburgers` by typing this command:

```bash
npm run sasseo-config-hamburgers
```

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/humburger-demo.gif?raw=true" width="450">
</div>

<br>

Here is the list of Hamburger-like `class` you can choose from:

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

> **NOTE**: `-r` are reverse variants (e.g: `hamburger--spin` clockwise while `hamburger--spin-r` counter-clockwise).

<br>

**Use:**

- Import hamburgers module `@import 'sass-eo-lib-hamburgers'`

- Add the corresponding class in your HTML page:

```html
<!-- Trigger the active state by adding the class name `is-active`, just remove it for the inactive state -->
<button class="hamburger hamburger--collapse is-active" type="button">
	<span class="hamburger-box">
		<span class="hamburger-inner"></span>
	</span>
</button>
```

- Since the class name should be toggled with Javascript:

```js
var hamburger = document.querySelector('.hamburger');
// On click
hamburger.addEventListener('click', function () {
	// Toggle class "is-active"
	hamburger.classList.toggle('is-active');
});
```

<br>

##### `⚫ Loaders`

`loaders` are collections of mixins used to add a loading effect to each element

Type this command to get an example loader (in the root directory)

```bash
npm run sasseo-docs-loaders
```

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/loader.gif?raw=true" width="450">
</div>
<br>

> **NOTE**: Some loader contains only one color, i-e only 1 argument for the mixin (e.g: @include loader-10(dodgerblue))

<br>

**Use:**

Import loaders module `@import 'sass-eo-lib-loaders'`

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

##### `⚫ Magic`

`Magic` is a built-in CSS animation library in **sass-eo**, just call a magic mixin to animate an element

Type this command to get an example magic (in the root directory)

```bash
npm run sasseo-docs-magic
```

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/magic.gif?raw=true" width="450">
</div>
<br>

**Use:**

Import magic module `@import 'sass-eo-lib-magic'`

```scss
// SCSS - call the magic mixin inside a selector
.cards {
	//The argument of each magic mixin corresponds to its "animation-delay" expressed in seconds
	@include magic-boingInUp(1s);
}
```



---

### `📌 Applications`

Here are the lists of "applications" integrated in **sass-eo**

##### `⚫ GRID maker`

Generate basic CSS Grid code to make dynamic layouts !

```bash
npm run sasseo-app-gridmaker
```

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/grid-maker.gif?raw=true" width="500">
</div>

##### `⚫ FLEXBOX maker`

Generate flexbox CSS code to make dynamic layouts !

```bash
npm run sasseo-app-flexboxmaker
```

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/flexbox-maker.gif?raw=true" width="500">
</div>

##### `⚫ BUTTONS maker`

Generate stylish buttons in css !

```bash
npm run sasseo-app-buttonmaker
```

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/buttons-maker.gif?raw=true" width="500">
</div>

##### `⚫ BOX SHADOW maker`

Collection of shadow variants for your boxes !

```bash
npm run sasseo-app-shadowmaker
```

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/boxshadow-maker.gif?raw=true" width="500">
</div>



---

### `📌 Frameworks`

##### `⚫ Bootstrap`

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/bootstrap.png?raw=true" width="100">
</div>

**sass-eo** integrates the sass source code of BT5 in order to partially use its functionalities -> https://getbootstrap.com/docs/5.0/getting-started/introduction/

> **You have 3 choices to use bootstrap with sass-eo**

     sass-eo-bootstrap: to use bootstrap minifier version
     sass-eo-bootstrap-grid: to use only the boostrap grid system
     sass-eo-bootstrap-utils: to use only bootstrap utilities

<br>

##### `⚫ Semantic-ui`

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/semantic.png?raw=true" width="70">
</div>

I personally find this framework the best alternative to BT5, sematic-ui facilitates the creation of responsive layouts, one of the advantages of this framework is that it integrates semantic-ui-react , a collection of React components from Semantic-ui

- semantic-ui -> https://semantic-ui.com/introduction/getting-started.html
- semantic-ui-react -> https://react.semantic-ui.com/

> sass-eo-semantic: to use the minifier version of semantic-ui

<br>

##### `⚫ Milligrid`

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/milligram.png?raw=true" width="72">
</div>

**offline docs**

```bash
npm run sasseo-docs-milligrid
```

Milligrid is a configurable and easy to learn CSS flexbox grid system based on Milligram -> http://bencoveney.github.io/Milligrid/

> sass-eo-milligrid: to use the minifier version of milligrid



<div align="center">

#### Enjoy it 😉
</div>

