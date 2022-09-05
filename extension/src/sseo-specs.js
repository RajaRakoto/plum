export const sseo_specs = {
	resizable: {
		prefix: 'sseo-specs-resizable',
		body: [
			'@include resizable($$direction: ${1:none, both, vertical, horizontal}, $$overflow: ${2:auto, overflow});',
		],
		description:
			'The resizable mixin helps you make an element resizable in the horizontal or vertical directions.',
	},
	sizer: {
		prefix: 'sseo-specs-sizer',
		body: ['@include sizer($$width: ${1:pixel}, $$height: ${2:pixel});'],
		description:
			'Sizer mixin helps you size items with a statement (or two). Resize items or create square or rectangular shapes very easily.',
	},
	tablet: {
		prefix: 'sseo-specs-tablet',
		body: [
			'@include tablet($$device: ${1:xx-small, iPadMini, iPad, iPadAir, iPadPro, Nexus7, Nexus9, Nexus10}, $$orientation: ${2: portrait, landscape});',
		],
		description:
			'There will be times when you need to style elements only for a particular tablet model. Tablet mixin helps you achieve this.',
	},
	normalize: {
		prefix: 'sseo-specs-normalize',
		body: ['@include normalize();'],
		description:
			'Normalize allows browsers to render all elements more consistently and in line with modern standards - call once.',
	},
	only: {
		prefix: 'sseo-specs-only',
		body: [
			'@include only($$arg: ${1:selector(id, class), first, last, odd, even | number(-n, n)});',
		],
		description:
			"Only mixin helps you filter out matching elements based on their position among a group of siblings and apply your style rules only to those elements. This mixin uses CSS pseudo-classes :first- of-type, :last-of-type and :nth-of-type (inverse of 'except' mixin).",
	},
	loadify: {
		prefix: 'sseo-specs-loadify',
		body: [
			'@include loadify($$mode: ${1:init}, $$delay: ${2:second->0.2s}, $$duration: ${3:second->0.5s});',
		],
		description:
			'Loadify mixin is a handy tool that can help you load page element with crossfade effect during page load.',
	},
	'mini reset': {
		prefix: 'sseo-specs-minireset',
		body: ['@include minireset();'],
		description:
			'The minireset is a technique that consists of resetting the value of certain HTML elements to 0 in order to avoid certain differences.',
	},
	mobile: {
		prefix: 'sseo-specs-mobile',
		body: [
			'@include mobile($$device: ${1:iPhone4, iPhone-SE, iPhone5-SE, iPhone6, iPhone6-Plus, iPhone7, iPhone7-Plus, iPhone8, iPhone8-Plus, iPhone11, iPhone11-Pro, iPhone11-Pro -Max, iPhoneX, Galaxy-S7, Galaxy-S8, Galaxy-S8-Plus, Galaxy-S10',
			'}, ${2:$$orientation: portrait, landscape});',
		],
		description:
			'There will be times when you need to style elements only for a particular smartphone model. mobile mixin helps you achieve this.',
	},
	except: {
		prefix: 'sseo-specs-except',
		body: [
			'@include except($$arg: ${1:selector(id, class), first, last, odd, even | number(-n, n)});',
		],
		description:
			"Except mixin helps you target items to which you don't want to apply the style changes you want for other items in the list (opposite of 'only' mixin).",
	},
	antialias: {
		prefix: 'sseo-specs-antialias',
		body: ['@include antialias($$value: ${1:null, only});'],
		description:
			'The Antialias mixin provides smooth font rendering, which means smoothing the font at the pixel level and preventing sub-pixel rendering.',
	},
	adaptive: {
		prefix: 'sseo-specs-adaptive',
		body: ['@include adaptive($$gutter: ${1:pixel->30px});'],
		description:
			'The adaptive mixin helps you set the max-width value for containing elements based on the breakpoint values ​​defined in the _map-for-breakpoints.scss file, and also specifies a $gutter value, where the edges of a browser screen can most closely match the edges of the selected element. (Hint: the adaptive mixin works best with percentage values.).',
	},
	convertToRem: {
		prefix: 'sseo-func-convertToRem',
		body: ['__convertToRem($$value: ${1:pixel});'],
		description: 'A function that converts a pixel value to rem.',
	},
};
