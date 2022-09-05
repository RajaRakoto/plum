// engine importation
import { traverseKeyValueByObject } from './_utils-engine_.js';
// snippets source importation
import { sseo_colors } from '../src/sseo-colors.js';

function reformatSnippets(source) {
	let prefixList = traverseKeyValueByObject(source, 'prefix');
	let bodyList = traverseKeyValueByObject(source, 'body').map(block =>
		block.map(e => `"${e}"`),
	);
	let descriptionList = traverseKeyValueByObject(source, 'description');
	let result = '';
	prefixList.forEach((prefix, index) => {
		result += `
			"${descriptionList[index]}": {
				"prefix": "${prefix}",
				"body": [${bodyList[index]}],
				"description":  "${descriptionList[index]}"
			}${index == prefixList.length - 1 ? '' : ','}
			`;
	});
	return '{' + result + '}';
}

console.log(reformatSnippets(sseo_colors));
