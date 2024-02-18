// engine importation
import { concatJSONsourcesToOneFile } from './_utils-engine_.js'
// snippets source importation
import { sseo_animation } from '../src/sseo-animation.js'
import { sseo_box } from '../src/sseo-box.js'
import { sseo_color } from '../src/sseo-color.js'
import { sseo_docs } from '../src/sseo-docs.js'
import { sseo_effect } from '../src/sseo-effect.js'
import { sseo_image } from '../src/sseo-image.js'
import { sseo_import } from '../src/sseo-import.js'
import { sseo_input } from '../src/sseo-input.js'
import { sseo_layout } from '../src/sseo-layout.js'
import { sseo_libraries } from '../src/sseo-libraries.js'
import { sseo_media } from '../src/sseo-media.js'
import { sseo_position } from '../src/sseo-position.js'
import { sseo_spacing } from '../src/sseo-spacing.js'
import { sseo_specs } from '../src/sseo-specs.js'
import { sseo_tools } from '../src/sseo-tools.js'

// all snippets list
const snippetsList = [
  sseo_animation,
  sseo_box,
  sseo_color,
  sseo_docs,
  sseo_effect,
  sseo_image,
  sseo_import,
  sseo_input,
  sseo_layout,
  sseo_libraries,
  sseo_media,
  sseo_position,
  sseo_spacing,
  sseo_specs,
  sseo_tools,
]

// concat all snippets to one JSON file
concatJSONsourcesToOneFile(snippetsList, '../dist/sass-eo.code-snippets')
