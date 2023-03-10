export const get_started = `
---

### \`📌 Get started\`

##### \`⚫ Initialization\`

Before using **sass-eo**, add the following npm script commands to your project's \`package.json\` file:

\`\`\`json
"scripts": {
  "sseo-install": "npm i @raja_rakoto/sass-eo --save-dev",
  "sseo-deps": "npm i grunt grunt-contrib-sass grunt-contrib-watch grunt-shell load-grunt-tasks sassdoc -D",
  "sseo-update": "npm update @raja_rakoto/sass-eo",
  "sseo-init": "grunt --gruntfile ./node_modules/@raja_rakoto/sass-eo/config/gen.cjs generate-sseo-cli",
  "sseo-start": "grunt --gruntfile sass-eo-cli.js",
  "sseo-watch": "grunt --gruntfile sass-eo-cli.js watch-sass",
  "sseo-docs-basics": "grunt --gruntfile sass-eo-cli.js sseo-docs",
  "sseo-docs-loaders": "grunt --gruntfile sass-eo-cli.js loaders-docs",
  "sseo-docs-magic": "grunt --gruntfile sass-eo-cli.js magic-docs",
  "sseo-docs-milligrid": "grunt --gruntfile sass-eo-cli.js milligrid-docs",
  "sseo-config-hamburgers": "grunt --gruntfile sass-eo-cli.js hamburgers-config",
  "sseo-app-grid": "grunt --gruntfile sass-eo-cli.js grid-maker",
  "sseo-app-flexbox": "grunt --gruntfile sass-eo-cli.js flexbox-maker",
  "sseo-app-boxshadow": "grunt --gruntfile sass-eo-cli.js boxshadow-maker"
  "sseo-app-buttons": "grunt --gruntfile sass-eo-cli.js buttons-maker"
}
\`\`\`

##### \`⚫ Installation\`

Run the command below to install **sass-eo**:

\`\`\`bash
npm run sasseo-install
\`\`\`

Run the following command to use **sass-eo** dependencies:

\`\`\`bash
npm run sasseo-deps
\`\`\`

##### \`⚫ Update\`

Run the following command to update **sass-eo**:

\`\`\`bash
npm run sasseo-update
\`\`\`

`
