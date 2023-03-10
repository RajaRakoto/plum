export const usage = `
---

### \`📌 Usage\`

Here's how to use **sass-eo** in a project ...

##### \`⚫ sass-eo-cli\`

**sass-eo-cli** is a command line interface to manage third-party features (sass-watch, generate docs, apps, ...) of **sass-eo**, the latter is based on the \`Grunt\` task runner, to use it, please run the following command to generate \`sass-eo-cli.js\` in root directory of your project:

\`\`\`bash
npm run sseo-init-cli
\`\`\`

> **NOTE**: Grunt makes it easy to import modules from \`node_modules\`. Using this you can import the module from **sass-eo** when you need it using \`@import <module_name>\` in any .scss file

- Type this command to see all lists of executable commands with **sass-eo-cli**:

\`\`\`bash
npm run sseo-start-cli
\`\`\`

- For example, you can run the command below to observe changes into \`.scss files\`:

\`\`\`bash
npm run sseo-watch
\`\`\`

##### \`⚫ modules\`

- Here are the lists of \`modules\` available in **sass-eo**:

=> To import a module, use the following syntax in \`.scss file\` -> **@import '<module_name>'** (e.g: \`@import 'sass-eo-basics'\`)

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

`
