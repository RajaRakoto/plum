export const sseo_extra = {
	'badge-linear': {
		prefix: 'sseo-badge-linear',
		body: [
			'@include badge-linear($$type: "${1:gold, silver}", $$height: ${2:pixel->4px}, $$width: ${3:pixel->10px }, $$gradient-speed: ${4:second->3s}, $$gradient-direction: ${5:normal, reverse->normal}, $$gradient-orientation: ${6:60deg, 90deg- >60deg}, $$border-radius: ${7:pixel->10px}, $$border: ${8:boolean->false}, $$font-size: ${9:pixel->12px}, $$font-color: ${10:color->#444, #eee->#444}, $$font-weight: ${12:bolder, normal, lighter->bolder});',
		],
		description: 'Add badge with animated linear gradient',
	},
	'bar-scrolling': {
		prefix: 'sseo-bar-scrolling',
		body: [
			'@include bar-scrolling($$bar-color: ${1:color}, $$bar-color-hover: ${2:color}, $$bg-color: ${3:color->#eee });',
		],
		description: "Customize your webpage's scrollbar.",
	},
	'button-all': {
		prefix: 'sseo-button-all',
		body: [
			'@include button-all($$nickname: ${1:hover, focus, active, disabled});',
		],
		description:
			'Button-all mixin helps you target all HTML button elements in the DOM so you can easily apply your style rules.',
	},
	'nav-props': {
		prefix: 'sseo-nav-props',
		body: ['@include nav-props();'],
		description:
			'Nav-props mixin allows to quickly initialize the default CSS properties of a navigation bar.',
	},
	'typo-fontface': {
		prefix: 'sseo-typo-fontface',
		body: [
			'@include typo-fontface($$font-name: ${1:string}, $$path: ${2:url}, $$weight: ${3:normal, lighter, bold, bolder',
			'}, $$style: ${4:normal, italic});',
		],
		description:
			'This mixin performs fast import of external fonts and includes consistent properties.',
	},
	'video-responsive': {
		prefix: 'sseo-video-responsive',
		body: ['@include video-responsive($$ratio: ${1:16/9, 4/3});'],
		description:
			'The responsive video mixin helps you create responsive containing elements with a fixed aspect ratio that you define. This is especially useful when embedding videos from YouTube or similar sources.',
	},
};
