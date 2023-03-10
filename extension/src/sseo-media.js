export const sseo_media = {
  '[media]: Breakpoint mixin helps you create scalable media queries and breakpoints using @media CSS rule in SCSS.':
    {
      prefix: 'sseo-media-breakpoint',
      body: [
        '@include breakpoint(${1:$$mode: only, min, max, beetween}, ${2:$$value: xsmall, small, medium, large, xlarge | pixel});',
      ],
      description:
        '[media]: Breakpoint mixin helps you create scalable media queries and breakpoints using @media CSS rule in SCSS.',
    },

  "[media]: Breakpointer mixin is a handy little tool that shows what breakpoint you're at so you can write your styles for that specific screen size.":
    {
      prefix: 'sseo-media-breakpointer',
      body: ['@include breakpointer($$selector: ${1:id, class, tag});'],
      description:
        "[media]: Breakpointer mixin is a handy little tool that shows what breakpoint you're at so you can write your styles for that specific screen size.",
    },
}
