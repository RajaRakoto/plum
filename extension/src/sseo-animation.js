export const sseo_animation = {
	'animation-rotateX': {
		prefix: 'sseo-animation-rotateX',
		body: ['@include animation-rotateX($$duration: ${second});'],
		description: 'Add rotate X animation.',
	},
	'animation-rotateY': {
		prefix: 'sseo-animation-rotateY',
		body: ['@include animation-rotateY($$duration: ${second});'],
		description: 'Add rotate Y animation.',
	},
	'animation-scale': {
		prefix: 'sseo-animation-scale',
		body: ['@include animation-scale($$scaleValue: ${1:foat->0.5~1.5};'],
		description: 'Add scale animation (mini zoom effect).',
	},
	'animation-slide': {
		prefix: 'sseo-animation-slide',
		body: [
			'@include animation-slide($$in-out: ${1:in, out}, $$direction: ${2:up, down, right, left});',
		],
		description: 'Add a slide animation effect - great for a sidebar.',
	},
	'animation-fade': {
		prefix: 'sseo-animation-fade',
		body: ['@include animation-fade($$in-out: ${1:in, out});'],
		description: 'Add Slide Animation Effect (Fluid).',
	},

	'zoom-animation': {
		prefix: 'sseo-animation-zoom',
		body: ['@include animation-zoom($$in-out: ${1:in, out});'],
		description:
			'Add a temporary zoom animation effect - often used for an animation effect on entry.',
	},
	'animation-flip': {
		prefix: 'sseo-animation-flip',
		body: ['@include animation-flip($$in-out: ${1:in, out});'],
		description: 'Add flip animation effect.',
	},
	'animation-rotate': {
		prefix: 'sseo-animation-rotate',
		body: [
			'@include animation-rotate($$in-out: ${1:in, out}, $$yax: ${2:up, down}, $$xax: ${3:left, right});',
		],
		description: 'Add rotation animation effect.',
	},
	'notify-animation': {
		prefix: 'sseo-animation-notif',
		body: ['@include animation-notif($$in-out: ${1:in, out});'],
		description: 'Add notification animation effect.',
	},
	'animation-pulse': {
		prefix: 'sseo-animation-pulse',
		body: ['@include animation-pulse();'],
		description: 'Add pulse animation effect.',
	},
	'animation-bounce': {
		prefix: 'sseo-animation-bounce',
		body: ['@include animation-bounce();'],
		description: 'Add bounce animation effect.',
	},
	'flash-animation': {
		prefix: 'sseo-animation-flash',
		body: ['@include animation-flash();'],
		description: 'Add flash animation effect.',
	},
};
