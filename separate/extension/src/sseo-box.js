export const sseo_box = {
  '[box]: Box-circle mixin helps you easily create perfect circle shapes.': {
    prefix: 'sseo-box-circle',
    body: ['@include box-circle($$size: ${1:pixel});'],
    description:
      '[box]: Box-circle mixin helps you easily create perfect circle shapes.',
  },

  '[box]: The Box-radius mixin helps you round the corner(s) of a selected element using the CSS border-radius property. You can pass a value (along with the unit) to style all the corners of the same way or you can use the CSS shorthand property to style each corner differently - the benefit of using this mixin is that each value as you type is transformed into REM giving a more responsive styling effect.':
    {
      prefix: 'sseo-box-radius',
      body: [
        '@include box-radius(${1:null, top, top-right, right, bottom-right, bottom, botton-left, left, top-left, cross-left, cross-right, all}, ${2:pixel});',
      ],
      description:
        '[box]: The Box-radius mixin helps you round the corner(s) of a selected element using the CSS border-radius property. You can pass a value (along with the unit) to style all the corners of the same way or you can use the CSS shorthand property to style each corner differently - the benefit of using this mixin is that each value as you type is transformed into REM giving a more responsive styling effect.',
    },

  '[box]: Box-sizing mixin sets the value of the CSS box-sizing property to border-box for the selected HTML elements. So the padding and border will be inside the selected element.':
    {
      prefix: 'sseo-box-sizing',
      body: ['@include box-sizing($$value: ${1:null, only});'],
      description:
        '[box]: Box-sizing mixin sets the value of the CSS box-sizing property to border-box for the selected HTML elements. So the padding and border will be inside the selected element.',
    },

  '[box]: Quickly add a border on containers (useful for debugging).': {
    prefix: 'sseo-box-debugging',
    body: [
      '@include box-debugging($$colors: ${1:color->red}, $$size: ${2:pixel->3px}, $$bg-color: ${3:boolean->false} , $$status: ${4:boolean->true});',
    ],
    description:
      '[box]: Quickly add a border on containers (useful for debugging).',
  },
}
