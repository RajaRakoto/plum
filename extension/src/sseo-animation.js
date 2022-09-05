export const sseo_animation = {
	'Add rotate X animation.': {
		prefix: 'sseo-animation-rotateX',
		body: ['@include animation-rotateX($$duration: ${second});'],
		description: 'Add rotate X animation.',
	},

	'Add rotate Y animation.': {
		prefix: 'sseo-animation-rotateY',
		body: ['@include animation-rotateY($$duration: ${second});'],
		description: 'Add rotate Y animation.',
	},

	'Add scale animation (mini zoom effect).': {
		prefix: 'sseo-animation-scale',
		body: ['@include animation-scale($$scaleValue: ${1:foat->0.5~1.5};'],
		description: 'Add scale animation (mini zoom effect).',
	},

	'Add a slide animation effect - great for a sidebar.': {
		prefix: 'sseo-animation-slide',
		body: [
			'@include animation-slide($$in-out: ${1:in, out}, $$direction: ${2:up, down, right, left});',
		],
		description: 'Add a slide animation effect - great for a sidebar.',
	},

	'Add Slide Animation Effect (Fluid).': {
		prefix: 'sseo-animation-fade',
		body: ['@include animation-fade($$in-out: ${1:in, out});'],
		description: 'Add Slide Animation Effect (Fluid).',
	},

	'Add a temporary zoom animation effect - often used for an animation effect on entry.':
		{
			prefix: 'sseo-animation-zoom',
			body: ['@include animation-zoom($$in-out: ${1:in, out});'],
			description:
				'Add a temporary zoom animation effect - often used for an animation effect on entry.',
		},

	'Add flip animation effect.': {
		prefix: 'sseo-animation-flip',
		body: ['@include animation-flip($$in-out: ${1:in, out});'],
		description: 'Add flip animation effect.',
	},

	'Add rotation animation effect.': {
		prefix: 'sseo-animation-rotate',
		body: [
			'@include animation-rotate($$in-out: ${1:in, out}, $$yax: ${2:up, down}, $$xax: ${3:left, right});',
		],
		description: 'Add rotation animation effect.',
	},

	'Add notification animation effect.': {
		prefix: 'sseo-animation-notif',
		body: ['@include animation-notif($$in-out: ${1:in, out});'],
		description: 'Add notification animation effect.',
	},

	'Add pulse animation effect.': {
		prefix: 'sseo-animation-pulse',
		body: ['@include animation-pulse();'],
		description: 'Add pulse animation effect.',
	},

	'Add bounce animation effect.': {
		prefix: 'sseo-animation-bounce',
		body: ['@include animation-bounce();'],
		description: 'Add bounce animation effect.',
	},

	'Add flash animation effect.': {
		prefix: 'sseo-animation-flash',
		body: ['@include animation-flash();'],
		description: 'Add flash animation effect.',
	},
};
