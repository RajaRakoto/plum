// engine importation
import { fsReadDir } from './_utils-engine_.js'

// to get all ES6 modules syntax from the source directory
function getES6moduleSyntaxBySource(source, extension) {
  const fixVarName = (varName) => varName.replace(/-/g, '_')
  const dropRight = (arr, n = 1) => arr.slice(0, -n)
  let sourceList = fsReadDir(source)
  let sourceES6 = []
  sourceList.forEach((source) => {
    if (source.endsWith(extension)) {
      sourceES6.push(dropRight(source, 3))
    }
  })
  return sourceES6.map(
    (source) => `import { ${fixVarName(source)} } from './${source}.js';`,
  )
}

console.log(getES6moduleSyntaxBySource('../src', '.js'))
