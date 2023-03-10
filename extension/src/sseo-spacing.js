export const sseo_spacing = {
  "[spacing]: Quickly change an item's padding.": {
    prefix: 'sseo-spacing-padding',
    body: [
      '@include spacing-padding($$top: ${1:pixel}, $$right: ${2:pixel}, $$bottom: ${3:pixel}, $$left: ${4:pixel});',
    ],
    description: "[spacing]: Quickly change an item's padding.",
  },

  "[spacing]: Quickly change an element's margin.": {
    prefix: 'sseo-spacing-margin',
    body: [
      '@include spacing-margin($$top: ${1:pixel}, $$right: ${2:pixel}, $$bottom: ${3:pixel}, $$left: ${4:pixel});',
    ],
    description: "[spacing]: Quickly change an element's margin.",
  },

  '[spacing]: Quickly add predefined padding based on template argument.': {
    prefix: 'sseo-spacing-padding-template',
    body: [
      '@include spacing-padding-gabarit($$gabarit: ${1:xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large});',
    ],
    description:
      '[spacing]: Quickly add predefined padding based on template argument.',
  },

  '[spacing]: Quickly add a predefined margin based on the template argument.':
    {
      prefix: 'sseo-spacing-margin-template',
      body: [
        '@include spacing-margin-gabarit($$gabarit: ${1:xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large});',
      ],
      description:
        '[spacing]: Quickly add a predefined margin based on the template argument.',
    },

  '[spacing]: Quickly add a predefined padding|margin based on the template argument.':
    {
      prefix: 'sseo-spacing-all-template',
      body: [
        '@include spacing-all-gabarit($$gabarit: ${1:xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large});',
      ],
      description:
        '[spacing]: Quickly add a predefined padding|margin based on the template argument.',
    },
}
