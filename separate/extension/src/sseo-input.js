export const sseo_input = {
  "[input]: The input-placeholder mixin will help you style placeholder text in an 'input' or 'textarea' element and generate cross-browser compatible CSS.":
    {
      prefix: 'sseo-input-placeholder',
      body: ['@include input-placeholder();'],
      description:
        "[input]: The input-placeholder mixin will help you style placeholder text in an 'input' or 'textarea' element and generate cross-browser compatible CSS.",
    },

  "[input]: The input-placeholder-shown mixin helps you style the 'input' or 'textarea' element that currently displays the placeholder text. As soon as the placeholder text disappears (it's i.e. when the user starts typing), the applied style rules also disappear.":
    {
      prefix: 'sseo-input-placeholder-shown',
      body: ['@include input-placeholder-shown();'],
      description:
        "[input]: The input-placeholder-shown mixin helps you style the 'input' or 'textarea' element that currently displays the placeholder text. As soon as the placeholder text disappears (it's i.e. when the user starts typing), the applied style rules also disappear.",
    },

  '[input]: Input-all mixin helps you target all text-based HTML input elements in the DOM, so you can easily apply your style rules.':
    {
      prefix: 'sseo-input-all',
      body: [
        '@include input-all($$nickname: ${1:null, hover, focus, active, invalid, required, disabled});',
      ],
      description:
        '[input]: Input-all mixin helps you target all text-based HTML input elements in the DOM, so you can easily apply your style rules.',
    },

  '[input]: Input-style-scale adds zoom effect style for input.': {
    prefix: 'sseo-input-style-scale',
    body: [
      '@include input-style-scale($$bg-color: ${1:color->#eee}, $$border-color: ${2:color->#eee}, $$text-color: $ {3:#444});',
    ],
    description: '[input]: Input-style-scale adds zoom effect style for input.',
  },
}
