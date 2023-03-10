export const sseo_color = {
  '[palette]: Preset color palette.': {
    prefix: 'sseo-palette-green',
    body: [
      '$$turquoise: #1abc9c;',
      '$$green-sea: #16a085;',
      '$$emerald: #2ecc71;',
      '$$nephritis: #27ae60;',
    ],
    description: '[palette]: Preset color palette.',
  },

  '[palette]: Preset color palette.': {
    prefix: 'sseo-palette-blue',
    body: [
      '$$peter-river: #3498db;',
      '$$belize-hole: #2980b9;',
      '$$wet-asphalt: #34495e;',
      '$$midnight-blue: #2c3e50;',
    ],
    description: '[palette]: Preset color palette.',
  },

  '[palette]: Preset color palette.': {
    prefix: 'sseo-palette-purple',
    body: ['$$amethyst: #9b59b6;', '$$wisteria: #8e44ad;'],
    description: '[palette]: Preset color palette.',
  },

  '[palette]: Preset color palette.': {
    prefix: 'sseo-palette-yellow|orange',
    body: [
      '$$sun-flower: #f1c40f;',
      '$$orange: #f39c12;',
      '$$carrot: #e67e22;',
    ],
    description: '[palette]: Preset color palette.',
  },

  '[palette]: Preset color palette.': {
    prefix: 'sseo-palette-red',
    body: [
      '$$pumpkin: #d35400;',
      '$$alizarin: #e74c3c;',
      '$$pomegranate: #c0392b;',
    ],
    description: '[palette]: Preset color palette.',
  },

  '[palette]: Preset color palette.': {
    prefix: 'sseo-palette-gray',
    body: [
      '$$clouds: #ecf0f1;',
      '$$silver: #bdc3c7;',
      '$$concrete: #95a5a6;',
      '$$asbestos: #7f8c8d;',
    ],
    description: '[palette]: Preset color palette.',
  },

  '[color]: A function that returns the color pastel as an argument.': {
    prefix: 'sseo-func-color-pastel',
    body: ['__color-pastel($$colors: ${1:color});'],
    description:
      '[color]: A function that returns the color pastel as an argument.',
  },

  '[color]: A function that adjusts the brightness of an argument color.': {
    prefix: 'sseo-func-color-adjust',
    body: ['__color-adjust($$colors: ${1:color}, $$percent: ${2:percent});'],
    description:
      '[color]: A function that adjusts the brightness of an argument color.',
  },

  '[color]: A function that returns the complement of a color (used to determine a graphic charter).':
    {
      prefix: 'sseo-func-color-complement',
      body: ['__color-complement($$colors: ${1:color});'],
      description:
        '[color]: A function that returns the complement of a color (used to determine a graphic charter).',
    },
}
