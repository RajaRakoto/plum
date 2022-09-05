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

// to drop the last n characters of the string
export function dropRight(arr, n = 1) {
	return arr.slice(0, -n);
}