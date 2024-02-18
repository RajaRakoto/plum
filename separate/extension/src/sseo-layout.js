export const sseo_layout = {
  '[layout]: This mixin will be useful whenever you have content floating to the right or left and want to clear the space below the floating element to insert new content below - must be applied to the element parent.':
    {
      prefix: 'sseo-layout-clearfix',
      body: ['@include clearfix();'],
      description:
        '[layout]: This mixin will be useful whenever you have content floating to the right or left and want to clear the space below the floating element to insert new content below - must be applied to the element parent.',
    },

  "[layout]: Columnize mixin helps you create hypothetical evenly divided columns (based on flexbox) in a containing element, as much as the value you pass for the $columns argument. So you can display all children at the same time. 'inside parent element as if aligned in a column - [WARNING]: must be applied to parent element to align children inside of it!.":
    {
      prefix: 'sseo-layout-columnize',
      body: [
        '@include columnize(${1:$$columns: number}, ${2:$$gutter: :pixel}, ${3:$$fill: boolean->false});',
      ],
      description:
        "[layout]: Columnize mixin helps you create hypothetical evenly divided columns (based on flexbox) in a containing element, as much as the value you pass for the $columns argument. So you can display all children at the same time. 'inside parent element as if aligned in a column - [WARNING]: must be applied to parent element to align children inside of it!.",
    },
}
