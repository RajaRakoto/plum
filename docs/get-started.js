export const get_started = `
---

### \`📌 Get started\`

##### \`⚫ Initialization\`

Before using **sass-eo**, add the following npm script commands to your project's \`package.json\` file:

\`\`\`json
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

`;
