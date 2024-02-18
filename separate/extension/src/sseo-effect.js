export const sseo_effect = {
  '[effect]: Mixin Effect-gradient-text (also known as CSS Gradient Text) helps you add a gradient overlay to a text element. Provides a one-line method to very easily set the angle of direction of the gradient line, the values ​​of coow and the positions of the color stops.':
    {
      prefix: 'sseo-effect-gradient-text',
      body: [
        '@include effect-gradient-text($$direction: ${1:top, top-right, right, bottom-right, bottom, bottom-left, left, top-left}, $$colors: ${2: color});',
      ],
      description:
        '[effect]: Mixin Effect-gradient-text (also known as CSS Gradient Text) helps you add a gradient overlay to a text element. Provides a one-line method to very easily set the angle of direction of the gradient line, the values ​​of coow and the positions of the color stops.',
    },

  '[effect]: The Effect-gradient-radial mixin helps you generate beautiful radial CSS gradients. It uses the radial-gradient CSS property.':
    {
      prefix: 'sseo-effect-gradient-radial',
      body: [
        '@include effect-grandient-radial($$shape: ${1:null, circle, ellipse}, $$position: ${2:top, top-right, right, bottom-right, bottom, bottom-left, left, top-left, center, closest-side, farthest-side, closest-corner, farthest-corner}, $$colors: ${3:color});',
      ],
      description:
        '[effect]: The Effect-gradient-radial mixin helps you generate beautiful radial CSS gradients. It uses the radial-gradient CSS property.',
    },

  '[effect]: The Effect-gradient-linear mixin helps you generate colorful CSS gradients and combines them with image and text elements. This way you can create beautiful page components.':
    {
      prefix: 'sseo-effect-gradient-linear',
      body: [
        '@include effect-grandient-linear($$direction: ${1:top, top-right, right, bottom-right, bottom, bottom-left, left, top-left}, $$colors: ${2: colorlist});',
      ],
      description:
        '[effect]: The Effect-gradient-linear mixin helps you generate colorful CSS gradients and combines them with image and text elements. This way you can create beautiful page components.',
    },

  '[effect]: The effect-text-image mixin helps you clip the background image of a selected element to the shape of its foreground text.':
    {
      prefix: 'sseo-effect-text-image',
      body: ['@include effect-text-image($$image: ${1:url});'],
      description:
        '[effect]: The effect-text-image mixin helps you clip the background image of a selected element to the shape of its foreground text.',
    },

  '[effect]: Simply call the effect-hide mixin to visually hide the selected element and all of its children (but accessible to screen readers).':
    {
      prefix: 'sseo-effect-hide',
      body: ['@include effect-hide($$toggle: ${1:hide, unhide)};'],
      description:
        '[effect]: Simply call the effect-hide mixin to visually hide the selected element and all of its children (but accessible to screen readers).',
    },

  '[effect]: Add an opacity effect on an element (compatible with IE8).': {
    prefix: 'sseo-effect-opacity',
    body: ['@include effect-opacity($$percent: ${1:percent});'],
    description:
      '[effect]: Add an opacity effect on an element (compatible with IE8).',
  },

  '[effect]: Add an outer shadow effect on a container.': {
    prefix: 'sseo-effect-box-shadow',
    body: [
      '@include effect-box-shadow($$opacity: ${1:solid, small, medium, large, smooth, none});',
    ],
    description: '[effect]: Add an outer shadow effect on a container.',
  },

  '[effect]: Add an interior shadow effect on a container.': {
    prefix: 'sseo-effect-box-shadow-inset',
    body: [
      '@include effect-box-shadow-inset($$opacity: ${1:small, medium, large, none});',
    ],
    description: '[effect]: Add an interior shadow effect on a container.',
  },

  '[effect]: Add an inner shadow effect on text.': {
    prefix: 'sseo-effect-text-shadow',
    body: [
      '@include effect-text-shadow($$opacity: ${1:small, medium, large, none}, $$colors: ${2:color->#222});',
    ],
    description: '[effect]: Add an inner shadow effect on text.',
  },

  "[effect]: The effect-text-supershadow mixin helps you add shadow to text elements. Accepts a comma-separated list of shadows or a single shadow value that can optionally be multiplied. It provides an easy-to-use one-line method - unlike th'effect-text-shadow' mixin, this one is more customizable and more powerful in terms of functionality.":
    {
      prefix: 'sseo-effect-text-supershadow',
      body: [
        '@include effect-text-supershadow($$direction: ${1:top, top-right, right, bottom-right, bottom, bottom-left, left, top-left}, $$colors: ${2: color->rgba(black, 0.3)}, $$size: ${3:pixel}, $$blur: ${4:pixel->null}, $$fill: ${5:boolean->false}) ;',
      ],
      description:
        "[effect]: The effect-text-supershadow mixin helps you add shadow to text elements. Accepts a comma-separated list of shadows or a single shadow value that can optionally be multiplied. It provides an easy-to-use one-line method - unlike th'effect-text-shadow' mixin, this one is more customizable and more powerful in terms of functionality.",
    },

  '[effect]: The effect-text-stroke mixin helps you add a stroke to a text element and style it very easily.':
    {
      prefix: 'sseo-effect-text-stroke',
      body: [
        '@include effect-text-stroke($$colors: ${1:color->transparent}, $$stroke-color: ${2:color->black}, $$fallback-color: ${3:color ->black}, $$stroke-width: ${4:thin, medium, thick | pixel});',
      ],
      description:
        '[effect]: The effect-text-stroke mixin helps you add a stroke to a text element and style it very easily.',
    },

  '[effect]: Add external glow (light effect) to text.': {
    prefix: 'sseo-effect-text-light',
    body: [
      '@include effect-text-light($$opacity: ${1:small, medium, large, none}, $$colors: ${2:color->#eee});',
    ],
    description: '[effect]: Add external glow (light effect) to text.',
  },

  '[effect]: Add an external glow (light effect) to a container.': {
    prefix: 'sseo-effect-box-light',
    body: [
      '@include effect-box-light($$opacity: ${1:solid, small, medium, large, none}, $$colors: ${2:color->#eee});',
    ],
    description:
      '[effect]: Add an external glow (light effect) to a container.',
  },
}
