<div align="center">

# ᔕᗩᔕᔕ-EO

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/for-dago.svg?raw=true)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![Sass](https://img.shields.io/badge/-Sass-777?style=flat&logo=sass&logoColor=ffffff&labelColor=%23CC6699) ![JSON](https://img.shields.io/badge/-JSON-777?style=flat&logo=JSON&logoColor=777&labelColor=ffffff) ![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff) ![NPM](https://img.shields.io/badge/-NPM-777?style=flat&logo=npm&labelColor=ffffff)<br>

</div>

<div align="center">

| Table des matières                        |
| :---------------------------------------- |
| [Installation de sass-eo](#-installation)  |
| [Utilisation de sassdoc](#-sassdoc)        |
| [Hamburgers](#-hamburgers)                 |
| [Loader](#-loader)                         |
| [Magic](#-magic)                           |
| [Frameworks vendors](#-frameworks-vendors) |

</div>

### `📌 INSTALLATION`

Executer la commande ci-dessous pour installer **sass-eo** ainsi ses dependances dans votre projet

```bash
git clone --depth 1 https://github.com/RajaRakoto/sass-eo.git && cd sass-eo && npm install
```

**React** - pour une application React, executer la commande ci-dessous (dans votre projet)

```bash
mkdir -p public/libs && cd public/libs && git clone --depth 1 https://github.com/RajaRakoto/sass-eo.git && cd sass-eo && npm install
```

<div align="right">
    <b><a href="ᔕᗩᔕᔕ-eo">↥ Back To Top</a></b>
</div>
<hr>

### `📌 SASSDOC`

**sass-eo** utilise sassdoc, un système de documentation pour créer des documents jolis et puissants en un clin d'œil

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/sassdoc-sc.png?raw=true" width="700">
</div>
<br>

##### Notation (sassdoc)

La notation ci-dessous vous permet d'interagir avec sassdoc pour generer ou mettre a jour la documentation de sass-eo

```scss
/// Description ...
/// @author Raja ...
/// @param {type} $parameter [default_value] - description ...
/// @require $variable
/// @todo task ...
/// @deprecated
/// @example
///  ex1 ...
///  ex2 ...
@mixin/function name($parameter) {
code...
}
```

Exemple d'application de la syntaxe sassdoc

```scss
/// Ajouter des images haute résolution à votre site, avec une solution de rechange pour les appareils qui n'affichent pas d'images haute résolution, lors de l'utilisation de retina image, il est preferable de compresser autant que possible sans détruire l'image source (https://tinypng.com).
/// @param {path} $image - image path
/// @param {pixel} $width - largeur de l'image
/// @param {pixel} $height - hauteur de l'image
@mixin image-retina($image, $width, $height) {
	@media (min--moz-device-pixel-ratio: 1.3),
		(-o-min-device-pixel-ratio: 2.6/2),
		(-webkit-min-device-pixel-ratio: 1.3),
		(min-device-pixel-ratio: 1.3),
		(min-resolution: 1.3dppx) {
		/* on retina, use image that's scaled by 2 */
		background-image: url($image);
		background-size: $width $height;
	}
}
```

Executez la commande ci-dessous dans le repertoire sass-eo pour generer & mettre a jour la documentation localement

```bash
cd sass-eo && sassdoc .
```

<div align="right">
    <b><a href="https://github.com/RajaRakoto/sass-eo#%E1%94%95%E1%97%A9%E1%94%95%E1%94%95-eo">↥ Back To Top</a></b>
</div>
<hr>

### `📌 HAMBURGERS`

Hamburgers est une collection de savoureuses icônes de hamburger animées par CSS. La source est également incluse en tant que bibliothèque SASS modulable et personnalisable, alors préparez votre propre hamburger.

<div align="center">
<img src="http://i.imgur.com/t7cUjDu.gif" width="700">
</div>
<br>

Voici la liste des classes de type Hamburger que vous pouvez choisir:

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

**Remarque:** `-r` sont des variantes inverse (par exemple `hamburger--spin` dans le sens des aiguilles d'une montre tandis que `hamburger--spin-r` dans le sens anti-horaire.

<br>

**Usage:**

**1.** Decommentez la ligne correspondante `@import './hamburgers';` dans le fichier `sass-eo.scss`

**2.** Decommentez le type d'hamburger a utiliser dans le fichier `_hamburgers.scss`

**3.** Ajoutez la class correspondante dans votre page HTML:

```html
<!-- Déclencher l'état actif en ajoutant le nom de la classe `is-active`, il suffit de l'enlever pour l'etat inactif -->
<button class="hamburger hamburger--collapse is-active" type="button">
	<span class="hamburger-box">
		<span class="hamburger-inner"></span>
	</span>
</button>
```

**4.** Étant donné que le nom de la classe devrait être basculé via JavaScript:

```js
var hamburger = document.querySelector('.hamburger');
// On click
hamburger.addEventListener('click', function () {
	// Toggle class "is-active"
	hamburger.classList.toggle('is-active');
});
```

**5.** Vous pouvez modifier les paramètres par défaut de votre hamburger - trouvés dans `_hamburgers.scss`;

<div align="right">
    <b><a href="https://github.com/RajaRakoto/sass-eo#%E1%94%95%E1%97%A9%E1%94%95%E1%94%95-eo">↥ Back To Top</a></b>
</div>
<hr>

### `📌 LOADER`

Les `loaders` sont des collections de mixins servant a ajouter un effet de chargement pour chaque element - Vous pouvez consulter `loaderdoc` situE dans `loaderdoc/index.html` pour avoir un apercu sur chaque loader

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/loader.gif?raw=true" width="700">
</div>
<br>

**Note:** Certains loader ne contiennent qu'une seule couleur ,i-e 1 seul argument pour le mixin (Exemple -> `@include loader-10(dodgerblue)`)

<br>

**Usage:**

```scss
// SCSS
#my-loader {
	//utilisation de loader-1 avec 2 couleurs comme argument (primary, secondary)
	@include loader-1(gold, orangered);
}
```

```html
<!-- HTML - Juste apres la balise ouvrante <body> -->
<div id="my-loader"></div>
```

```js
// Javascript - ce script permet de lancer un loder portant l'id "my-loader" comme chargement de la page web
const loader = document.getElementById('my-loader');
window.addEventListener('load', () => {
	loader.style.display = 'none';
});
```

<div align="right">
    <b><a href="https://github.com/RajaRakoto/sass-eo#%E1%94%95%E1%97%A9%E1%94%95%E1%94%95-eo">↥ Back To Top</a></b>
</div>
<hr>

### `📌 MAGIC`

`Magic` est un bibliotheque d'animation CSS integrE dans sass-eo, il suffit d'appeler un mixin magic pour animer un element - Vous pouvez consulter `magicdoc` situE dans `magicdoc/index.html` pour avoir un apercu sur chaque effet magic

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/magic.gif?raw=true" width="700">
</div>
<br>

**Usage:** Appelez le mixin magic a l'interieur d'un selecteur

```scss
// SCSS
.cards {
	//L'argument de chaque mixin magic correspond a son "animation-delay" exprimE en seconde
	@include magic-boingInUp(1s);
}
```

<div align="right">
    <b><a href="https://github.com/RajaRakoto/sass-eo#%E1%94%95%E1%97%A9%E1%94%95%E1%94%95-eo">↥ Back To Top</a></b>
</div>
<hr>

### `📌 FRAMEWORKS vendors`

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/bootstrap.png?raw=true" width="100"><img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/semantic.png?raw=true" width="100"><img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/milligram.png?raw=true" width="130">
</div>
<br>

- **Bootstrap:** sass-eo integre le `grid system` de bootstrap 5 https://getbootstrap.com/docs/5.0/getting-started/introduction/

<br>

- **Semantic-ui:** je trouve personnellement ce framework la meilleure alternative à BT5, sematic-ui facilite la création de mises en page responsives, l'un des avantages de ce framework est qu'il intègre semantic-ui-react, une collection de composants React de Semantic-ui. https://semantic-ui.com/introduction/getting-started.html https://react.semantic-ui.com/

<br>

- **Milligram:** vous pouvez egalement utiliser milligram, un framework minimalist CSS, le `grid system` de ce dernier est plus simple a utiliser que celui de BT5 ou semantic-ui https://milligram.io/#getting-started
