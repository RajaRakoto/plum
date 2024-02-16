export const sseo_position = {
  '[position]: Position-set mixin provides a one-line method to quickly set both the position and offset properties of a selected element.':
    {
      prefix: 'sseo-position-set',
      body: [
        '@include position-set($$position: ${1:static, relative, fixed, absoluteute, sticky}, ${2:$$offsets: list(top, right, bottom, left)->0});',
      ],
      description:
        '[position]: Position-set mixin provides a one-line method to quickly set both the position and offset properties of a selected element.',
    },

  '[position]: Position-center mixin allows you to center elements (elements that have an absolute or fixed position value) on the horizontal and vertical axes - [WARNING]: You must declare position-style rule: absolute or position: fixed to the selected element for this mixin to work correctly. The position value of the parent element, in which you will center, must be something other than static.':
    {
      prefix: 'sseo-position-center',
      body: [
        '@include position-center($$axis: ${1:vertical, horizontal, both});',
      ],
      description:
        '[position]: Position-center mixin allows you to center elements (elements that have an absolute or fixed position value) on the horizontal and vertical axes - [WARNING]: You must declare position-style rule: absolute or position: fixed to the selected element for this mixin to work correctly. The position value of the parent element, in which you will center, must be something other than static.',
    },

  '[position]: Quickly center a block.': {
    prefix: 'sseo-position-block-center',
    body: ['@include position-block-center();'],
    description: '[position]: Quickly center a block.',
  },

  '[position]: Quickly center child element.': {
    prefix: 'sseo-position-flex-center',
    body: ['@include position-flex-center();'],
    description: '[position]: Quickly center child element.',
  },
}
