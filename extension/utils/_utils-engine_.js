import traverse from 'traverse';

export function traverseKeyValueByObject(source, key) {
	let traverseResult = [];
	traverse(source).forEach(function (e) {
		if (this.key == key) {
			traverseResult.push(e);
		}
	});
	return traverseResult;
}
