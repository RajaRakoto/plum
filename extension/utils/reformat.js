// engine importation
import { reformatSnippets, fsExport } from './_utils-engine_.js'
// old snippets source importation
import { sseo_animation } from '../src/sseo-animation.js'
import { sseo_basics } from '../src/sseo-basics.js'
import { sseo_box } from '../src/sseo-box.js'
import { sseo_colors } from '../src/sseo-color.js'
import { sseo_docs } from '../src/sseo-docs.js'
import { sseo_effect } from '../src/sseo-effect.js'
import { sseo_frameworks } from '../src/sseo-frameworks.js'
import { sseo_image } from '../src/sseo-image.js'
import { sseo_input } from '../src/sseo-input.js'
import { sseo_layout } from '../src/sseo-layout.js'
import { sseo_libraries } from '../src/sseo-libraries.js'
import { sseo_loaders } from '../src/sseo-loaders.js'
import { sseo_magic } from '../src/sseo-magic.js'
import { sseo_media } from '../src/sseo-media.js'
import { sseo_position } from '../src/sseo-position.js'
import { sseo_spacing } from '../src/sseo-spacing.js'
import { sseo_specs } from '../src/sseo-specs.js'
import { sseo_tools } from '../src/sseo-tools.js'

// all variables string lists
const varStringLists = [
  'sseo_animation',
  'sseo_basics',
  'sseo_box',
  'sseo_colors',
  'sseo_docs',
  'sseo_effect',
  'sseo_frameworks',
  'sseo_image',
  'sseo_input',
  'sseo_layout',
  'sseo_libraries',
  'sseo_loaders',
  'sseo_magic',
  'sseo_media',
  'sseo_position',
  'sseo_spacing',
  'sseo_specs',
  'sseo_tools',
]

// all variables lists
const varLists = [
  sseo_animation,
  sseo_basics,
  sseo_box,
  sseo_colors,
  sseo_docs,
  sseo_effect,
  sseo_frameworks,
  sseo_image,
  sseo_input,
  sseo_layout,
  sseo_libraries,
  sseo_loaders,
  sseo_magic,
  sseo_media,
  sseo_position,
  sseo_spacing,
  sseo_specs,
  sseo_tools,
]

// old snippets reformated output
function getReformatOutput() {
  varLists.forEach((varList, index) => {
    fsExport(
      reformatSnippets(varList, varStringLists[index]),
      `./output/${varStringLists[index].replace('_', '-')}.js`,
    )
  })
}

getReformatOutput()
