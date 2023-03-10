export const sseo_animation = {
  '[animation]: Add rotate X animation.': {
    prefix: 'sseo-animation-rotateX',
    body: ['@include animation-rotateX($$duration: ${second});'],
    description: '[animation]: Add rotate X animation.',
  },

  '[animation]: Add rotate Y animation.': {
    prefix: 'sseo-animation-rotateY',
    body: ['@include animation-rotateY($$duration: ${second});'],
    description: '[animation]: Add rotate Y animation.',
  },

  '[animation]: Add scale animation (mini zoom effect).': {
    prefix: 'sseo-animation-scale',
    body: ['@include animation-scale($$scaleValue: ${1:foat->0.5~1.5});'],
    description: '[animation]: Add scale animation (mini zoom effect).',
  },

  '[animation]: Add a slide animation effect - great for a sidebar.': {
    prefix: 'sseo-animation-slide',
    body: [
      '@include animation-slide($$in-out: ${1:in, out}, $$direction: ${2:up, down, right, left});',
    ],
    description:
      '[animation]: Add a slide animation effect - great for a sidebar.',
  },

  '[animation]: Add Slide Animation Effect (Fluid).': {
    prefix: 'sseo-animation-fade',
    body: ['@include animation-fade($$in-out: ${1:in, out});'],
    description: '[animation]: Add Slide Animation Effect (Fluid).',
  },

  '[animation]: Add a temporary zoom animation effect - often used for an animation effect on entry.':
    {
      prefix: 'sseo-animation-zoom',
      body: ['@include animation-zoom($$in-out: ${1:in, out});'],
      description:
        '[animation]: Add a temporary zoom animation effect - often used for an animation effect on entry.',
    },

  '[animation]: Add flip animation effect.': {
    prefix: 'sseo-animation-flip',
    body: ['@include animation-flip($$in-out: ${1:in, out});'],
    description: '[animation]: Add flip animation effect.',
  },

  '[animation]: Add rotation animation effect.': {
    prefix: 'sseo-animation-rotate',
    body: [
      '@include animation-rotate($$in-out: ${1:in, out}, $$yax: ${2:up, down}, $$xax: ${3:left, right});',
    ],
    description: '[animation]: Add rotation animation effect.',
  },

  '[animation]: Add notification animation effect.': {
    prefix: 'sseo-animation-notif',
    body: ['@include animation-notif($$in-out: ${1:in, out});'],
    description: '[animation]: Add notification animation effect.',
  },

  '[animation]: Add pulse animation effect.': {
    prefix: 'sseo-animation-pulse',
    body: ['@include animation-pulse();'],
    description: '[animation]: Add pulse animation effect.',
  },

  '[animation]: Add bounce animation effect.': {
    prefix: 'sseo-animation-bounce',
    body: ['@include animation-bounce();'],
    description: '[animation]: Add bounce animation effect.',
  },

  '[animation]: Add flash animation effect.': {
    prefix: 'sseo-animation-flash',
    body: ['@include animation-flash();'],
    description: '[animation]: Add flash animation effect.',
  },
}
