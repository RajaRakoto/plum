import traverse from 'traverse';
import fs from 'fs';

// to traverse all source object and get all values of the key
export function traverseKeyValueByObject(source, key) {
	let traverseResult = [];
	traverse(source).forEach(function (e) {
		if (this.key == key) {
			traverseResult.push(e);
		}
	});
	return traverseResult;
}

// to read all source list
export function fsReadDir(path) {
	if (!fs.existsSync(path)){
		fs.mkdirSync(path, { recursive: true });
	}
	return fs.readdirSync(path);
}

// to export all data
export function fsExport(data, filepath) {
	fs.writeFile(filepath, data, "utf-8" , err => {
		if (err) {
			console.log(err);
		}
	});
}

// reformat engine
export function reformatSnippets(source, varName) {
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
	return `export const ${varName} = {${result}};`;
}