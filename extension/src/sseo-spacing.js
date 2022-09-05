export const sseo_spacing = {
	'spacing-padding': {
		prefix: 'sseo-spacing-padding',
		body: [
			'@include spacing-padding($$top: ${1:pixel}, $$right: ${2:pixel}, $$bottom: ${3:pixel}, $$left: ${4:pixel});',
		],
		description: "Quickly change an item's padding.",
	},
	'spacing-margin': {
		prefix: 'sseo-spacing-margin',
		body: [
			'@include spacing-margin($$top: ${1:pixel}, $$right: ${2:pixel}, $$bottom: ${3:pixel}, $$left: ${4:pixel});',
		],
		description: "Quickly change an element's margin.",
	},
	'spacing-padding-template': {
		prefix: 'sseo-spacing-padding-template',
		body: [
			'@include spacing-padding-gabarit($$gabarit: ${1:xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large});',
		],
		description: 'Quickly add predefined padding based on template argument.',
	},
	'spacing-margin-template': {
		prefix: 'sseo-spacing-margin-template',
		body: [
			'@include spacing-margin-gabarit($$gabarit: ${1:xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large});',
		],
		description:
			'Quickly add a predefined margin based on the template argument.',
	},
	'spacing-all-template': {
		prefix: 'sseo-spacing-all-template',
		body: [
			'@include spacing-all-gabarit($$gabarit: ${1:xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large});',
		],
		description:
			'Quickly add a predefined padding|margin based on the template argument.',
	},
};
