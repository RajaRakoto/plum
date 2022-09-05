// engine importation
import { fsReadDir, dropRight } from './_utils-engine_.js';

// to get all ES6 modules from the source list
function getES6syntax(source) {
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith('.js')) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(source => `import { ${source} } from './${source}.js';`);
}

console.log(getES6syntax('../src'));