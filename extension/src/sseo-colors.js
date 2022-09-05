export const sseo_colors = {
	'all green palette': {
		prefix: 'sseo-palette-green',
		body: [
			'$$turquoise: #1abc9c;',
			'$$green-sea: #16a085;',
			'$$emerald: #2ecc71;',
			'$$nephritis: #27ae60;',
		],
		description: 'Preset color palette.',
	},
	'all blue palette.': {
		prefix: 'sseo-palette-blue',
		body: [
			'$$peter-river: #3498db;',
			'$$belize-hole: #2980b9;',
			'$$wet-asphalt: #34495e;',
			'$$midnight-blue: #2c3e50;',
		],
		description: 'Preset color palette.',
	},
	'all purple palette.': {
		prefix: 'sseo-palette-purple',
		body: ['$$amethyst: #9b59b6;', '$$wisteria: #8e44ad;'],
		description: 'Preset color palette.',
	},
	'all yellow|orange palette.': {
		prefix: 'sseo-palette-yellow|orange',
		body: [
			'$$sun-flower: #f1c40f;',
			'$$orange: #f39c12;',
			'$$carrot: #e67e22;',
		],
		description: 'Preset color palette.',
	},
	'all red palette.': {
		prefix: 'sseo-palette-red',
		body: [
			'$$pumpkin: #d35400;',
			'$$alizarin: #e74c3c;',
			'$$pomegranate: #c0392b;',
		],
		description: 'Preset color palette.',
	},
	'all gray palette.': {
		prefix: 'sseo-palette-gray',
		body: [
			'$$clouds: #ecf0f1;',
			'$$silver: #bdc3c7;',
			'$$concrete: #95a5a6;',
			'$$asbestos: #7f8c8d;',
		],
		description: 'Preset color palette.',
	},
	'__color-pastel': {
		prefix: 'sseo-func-color-pastel',
		body: ['__color-pastel($$colors: ${1:color});'],
		description: 'A function that returns the color pastel as an argument.',
	},
	'__color-adjust': {
		prefix: 'sseo-func-color-adjust',
		body: ['__color-adjust($$colors: ${1:color}, $$percent: ${2:percent});'],
		description: 'A function that adjusts the brightness of an argument color.',
	},
	'__color-complement': {
		prefix: 'sseo-func-color-complement',
		body: ['__color-complement($$colors: ${1:color});'],
		description:
			'A function that returns the complement of a color (used to determine a graphic charter).',
	},
};
