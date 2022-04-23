**sass-eo** possède une extension `vscode` pour faciliter son utilisation, cette extension contient un ensemble de snippets permettant de générer rapidement un extrait de code pour appeler un mixin ou une fonction de modules basiques, librairies ou frameworks...

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/extension-demo.gif?raw=true" width="500">
</div>

Voici comment utiliser cette extension :

- **`Installation`**

  Vous pouvez l'installer en tapant "sass-eo" dans l'onglet extension de votre IDE

> **NOTE** : Vous avez 2 versions d'extension, une en anglais et une en français (sass-eo-fr)

- **`Prefix`**

  L'extension de **sass-eo** inclut un "Prefix" particulier pour mieux organiser et classer ses snippets

  Syntaxe de base pour l'utilisation de l'extension :

  ```sass
  sseo-[category]-[name] (ex: sseo-func-color-pastel)
  ```

  **[category]** : représente des mots-clés pour identifier rapidement les snippets à utiliser, voici les listes de mots-clés

  - `animation`
  - `bar` (barre de défilement)
  - `box` (cercle, débogage, rayon, dimensionnement)
  - `button`
  - `docs` (uniquement utile dans un environnement de développement)
  - `effect` (boîte, dégradé, opacité, texte)
  - `func` (toutes les fonctions)
  - `image` (arrière-plan, logo, résolution, responsive, rétine)
  - `import` (modules sass-eo)
  - `input` (tout, placeholder, style)
  - `layout` (clearfix, columnize)
  - `lib` (magic, loaders, ...)
  - `media` (requêtes média)
  - `nav` (barres de navigation)
  - `palette` (répertorie la palette de couleurs sous forme de variable sass)
  - `position` (block, centrer, flex, set)
  - `spacing` (gabarit, margin, padding)
  - `specs` (mixins spéciaux ou non classés)
  - `typo` (police)
  - `video` (réactif)

  **[name]** : représente le nom d'un mixin, d'une fonction, d'une librairie ou d'un framework (ex : normalize, except, ...)

  > **NOTE** : vous pouvez retenir `[category]` ou `[name]` pour utiliser des snippets, le mot-clé de base `sseo` vous permet également de lister tous les snippets disponibles pour **sass-eo **
