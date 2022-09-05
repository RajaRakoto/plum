export const sseo_loaders = {
	'loaders (1 args)': {
		prefix: 'sseo-lib-loaders*1 [4-5-7-8-10-11]',
		body: ['@include loader-${1:index}($$primary: ${2:color});'],
		description: 'Mixin loaders from sass-eo',
	},
	'loaders (2 args)': {
		prefix: 'sseo-lib-loaders*2 [1-2-3-6-9-12]',
		body: [
			'@include loader-${1:index}($$primary: ${2:color}, $$secondary: ${3:color});',
		],
		description: 'Mixin loaders from sass-eo',
	},
	'sass-eo-lib-loaders': {
		prefix: 'sseo-import-lib-loaders',
		body: ["@import 'sass-eo-lib-loaders';"],
		description: 'Import module loaders (lib) from sass-eo',
	},
};
