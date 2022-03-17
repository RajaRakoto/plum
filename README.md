<div align="center">

# ᔕᗩᔕᔕ-EO

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/for-dago.svg?raw=true)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![HTML5](https://img.shields.io/badge/-TML5-777?style=flat&logo=html5&logoColor=ffffff&labelColor=E34F26) ![CSS3](https://img.shields.io/badge/-CSS3-777?style=flat&logo=css3&logoColor=ffffff&labelColor=1572B6) ![Sass](https://img.shields.io/badge/-Sass-777?style=flat&logo=sass&logoColor=ffffff&labelColor=%23CC6699) ![JSON](https://img.shields.io/badge/-JSON-777?style=flat&logo=JSON&logoColor=777&labelColor=ffffff) ![JavaScript](https://img.shields.io/badge/-JavaScript-777?style=flat&logo=javascript&logoColor=dbb332&labelColor=ffffff) ![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff) ![NPM](https://img.shields.io/badge/-NPM-777?style=flat&logo=npm&labelColor=ffffff)<br>

</div>

#### 📌 INSTALLATION

Executer la commande ci-dessous pour installer **sass-eo** ainsi ses dependances dans votre projet
```bash
git clone --depth 1 https://github.com/RajaRakoto/sass-eo.git && cd sass-eo && npm install
```

**React**
Pour une application React, executer la commande ci-dessous (dans votre projet)
```bash
mkdir -p public/libs && cd public/libs && git clone --depth 1 https://github.com/RajaRakoto/sass-eo.git && cd sass-eo && npm install
```

> **NOTE:** si vous voulez utiliser les frameworks vendors de sass-eo, ajouter le lien de style (css) et le script (js) correspondant a ce dernier dans le point d'entre -> `./public/index.html`

<hr>

#### 📌 SASSDOC

**sass-eo** utilise sassdoc, un système de documentation pour créer des documents jolis et puissants en un clin d'œil (executez la commande ci-dessous dans le repertoire sass-eo pour generer sa documentation localement)

```bash
sassdoc .
```

<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/sassdoc-sc.png?raw=true" width="500">

##### Notation (sassdoc)

```sass
/// Description ...
/// @author Raja ...
/// @param {type} $parameter [default_value] - description ...
/// @require $variable
/// @todo task ...
/// @deprecated
/// @example
///  ex1 ...
///  ex2 ...
@mixin name($parameter) {
code...
}
```

<hr>

#### 📌 FRAMEWORKS vendors

<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/bootstrap.png?raw=true" width="100"><img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/semantic.png?raw=true" width="100"><img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/milligram.png?raw=true" width="130">

- **Bootstrap:** sass-eo integre le `grid system` de bootstrap 5
https://getbootstrap.com/docs/5.0/getting-started/introduction/
<br>

- **Semantic-ui:** je trouve personnellement ce framework la meilleure alternative à BT5, sematic-ui facilite la création de mises en page responsives, l'un des avantages de ce framework est qu'il intègre semantic-ui-react, une collection de composants React de Semantic-ui.
https://semantic-ui.com/introduction/getting-started.html
https://react.semantic-ui.com/
<br>

- **Milligram:** vous pouvez egalement utiliser milligram, un framework minimalist CSS, le `grid system` de ce dernier est plus simple a utiliser que celui de BT5 ou semantic-ui
https://milligram.io/#getting-started