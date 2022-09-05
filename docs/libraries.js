export const libraries = `
---

### \`📌 Libraries\`

Here are the lists of built-in \`libraries\` in **sass-eo**

##### \`⚫ Hamburgers\`

\`Hamburgers\` is a collection of tasty hamburger icons animated by CSS. The source is also included as a modular and customizable Sass library, so make your own Hamburgers.

You can also customize the style (padding, wigth, height, spacing, color, border, opacity, ...) of your \`hamburgers\` by typing this command:

\`\`\`bash
npm run sasseo-config-hamburgers
\`\`\`

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/humburger-demo.gif?raw=true" width="450">
</div>

<br>

Here is the list of Hamburger-like \`class\` you can choose from:

\`\`\`
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
\`\`\`

<br>

> **NOTE**: \`-r\` are reverse variants (e.g: \`hamburger--spin\` clockwise while \`hamburger--spin-r\` counter-clockwise).

<br>

**Use:**

- Import hamburgers module \`@import 'sass-eo-lib-hamburgers'\`

- Add the corresponding class in your HTML page:

\`\`\`html
<!-- Trigger the active state by adding the class name \`is-active\`, just remove it for the inactive state -->
<button class="hamburger hamburger--collapse is-active" type="button">
	<span class="hamburger-box">
		<span class="hamburger-inner"></span>
	</span>
</button>
\`\`\`

- Since the class name should be toggled with Javascript:

\`\`\`js
var hamburger = document.querySelector('.hamburger');
// On click
hamburger.addEventListener('click', function () {
	// Toggle class "is-active"
	hamburger.classList.toggle('is-active');
});
\`\`\`

<br>

##### \`⚫ Loaders\`

\`loaders\` are collections of mixins used to add a loading effect to each element

Type this command to get an example loader (in the root directory)

\`\`\`bash
npm run sasseo-docs-loaders
\`\`\`

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/loader.gif?raw=true" width="450">
</div>
<br>

> **NOTE**: Some loader contains only one color, i-e only 1 argument for the mixin (e.g: @include loader-10(dodgerblue))

<br>

**Use:**

Import loaders module \`@import 'sass-eo-lib-loaders'\`

\`\`\`scss
// SCSS
#my-loader {
	//use loader-1 with 2 colors as argument (primary, secondary)
	@include loader-1(gold, orangered);
}
\`\`\`

\`\`\`html
<!-- HTML - Right after the opening tag <body> -->
<div id="my-loader"></div>
\`\`\`

\`\`\`js
// Javascript - this script allows to launch a loder with the id "my-loader" as loading of the web page
const loader = document.getElementById('my-loader');
window.addEventListener('load', () => {
	loader.style.display = 'none';
});
\`\`\`

<br>

##### \`⚫ Magic\`

\`Magic\` is a built-in CSS animation library in **sass-eo**, just call a magic mixin to animate an element

Type this command to get an example magic (in the root directory)

\`\`\`bash
npm run sasseo-docs-magic
\`\`\`

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/magic.gif?raw=true" width="450">
</div>
<br>

**Use:**

Import magic module \`@import 'sass-eo-lib-magic'\`

\`\`\`scss
// SCSS - call the magic mixin inside a selector
.cards {
	//The argument of each magic mixin corresponds to its "animation-delay" expressed in seconds
	@include magic-boingInUp(1s);
}
\`\`\`

`;
