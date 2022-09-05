export const sseo_image = {
	'image-logo': {
		prefix: 'sseo-image-logo',
		body: [
			'@include image-logo($$image: ${1:url}, $$width: ${2:pixel}, $$height: ${3:pixel});',
		],
		description:
			"Image-logo mixin helps you create an SEO-optimized logo component for your brand's website using CSS best practices.",
	},
	'image-background': {
		prefix: 'sseo-image-background',
		body: [
			'@include image-background($$image: ${1:url}, $$filter-color: ${2:color list}, $$filter-direction: ${3:top, top-right, right, bottom-right, bottom, bottom-left, left, top-left});',
		],
		description:
			'Image-background mixin lets you apply background images to selected items.',
	},
	'retina-image': {
		prefix: 'sseo-image-retina',
		body: [
			'@include image-retina($$image: ${1:url}, $$width: ${2:pixel}, $$height: ${3:pixel});',
		],
		description:
			"Add high-res images to your site, with a workaround for devices that don't display high-res images when using Retina Image, it's best to compress to the max without destroying image source (https://tinypng.com).",
	},
	'image-resolution': {
		prefix: 'sseo-image-resolution',
		body: ['@include image-resolution($$resolution: ${1:x1, x2, x3});'],
		description:
			'The image-resolution mixin helps you target elements to different screen resolutions.',
	},
	'responsive-image': {
		prefix: 'sseo-image-responsive',
		body: ['@include image-responsive($$height: ${1:pixel->auto});'],
		description:
			'The image-responsive mixin helps you make images responsive and change the default display CSS property value from inline to block to remove the extra space below.',
	},
};
