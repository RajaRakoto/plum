export const sseo_input = {
	'input-placeholder': {
		prefix: 'sseo-input-placeholder',
		body: ['@include input-placeholder();'],
		description:
			"The input-placeholder mixin will help you style placeholder text in an 'input' or 'textarea' element and generate cross-browser compatible CSS.",
	},
	'input-placeholder-shown': {
		prefix: 'sseo-input-placeholder-shown',
		body: ['@include input-placeholder-shown();'],
		description:
			"The input-placeholder-shown mixin helps you style the 'input' or 'textarea' element that currently displays the placeholder text. As soon as the placeholder text disappears (it's i.e. when the user starts typing), the applied style rules also disappear.",
	},
	'input-all': {
		prefix: 'sseo-input-all',
		body: [
			'@include input-all($$nickname: ${1:null, hover, focus, active, invalid, required, disabled});',
		],
		description:
			'Input-all mixin helps you target all text-based HTML input elements in the DOM, so you can easily apply your style rules.',
	},
	'input-style-scale': {
		prefix: 'sseo-input-style-scale',
		body: [
			'@include input-style-scale($$bg-color: ${1:color->#eee}, $$border-color: ${2:color->#eee}, $$text-color: $ {3:#444});',
		],
		description: 'Input-style-scale adds zoom effect style for input.',
	},
};
