export const modules_apps = `
---

### 📌 Modules & Applications

Here are the lists of "modules" or "applications" that you can use with **Plum**:

> Available on [plum CLI](https://github.com/RajaRakoto/plum-cli).

**\`Animate\`**  (module): A collection of CSS animations to make your website more attractive !

\`\`\`scss
@import '@rajarakoto/plum/modules/animate';
@include animate-bounceInLeft($duration: second, $delay: second);
\`\`\`

**\`Buttons2\`** (module): A highly customizable production ready mobile web and desktop css button library. Buttons is free and open source.

\`\`\`scss
@import '@rajarakoto/plum/modules/buttons2';
@include buttons2-borderless();
\`\`\`

**\`Flex\`** (app): Generate flexbox CSS code to make dynamic layouts !

**\`Grid\`** (app): Generate basic CSS Grid code to make dynamic layouts !

**\`Hover2\`** (module): A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on. Easily apply to your own elements, modify or just use for inspiration.

\`\`\`scss
@import '@rajarakoto/plum/modules/hover2';
@include hover2-2d-transitions-shrink();
\`\`\`

**\`Magic\`**: Magic CSS are a set of simple animations to include in your web or app project's.

\`\`\`scss
@import '@rajarakoto/plum/modules/magic';
@include magic-openUpLeft($duration: second, $delay: second);
\`\`\`

**\`Buttons\`** (app) : Generate stylish buttons in css !

**\`Open color (oc-scheme)\`** (module): Open-source color scheme optimized for UI like font, background, border, etc.

\`\`\`scss
@import '@rajarakoto/plum/modules/open-color';
$oc-green-0~9;
\`\`\`

**\`Shadows\`** (app): Collection of shadow variants for your boxes !
`
