var flexParent = document.querySelector('.flex-parent'),
  controlsContainer = document.querySelector('.controls-container'),
  propertyInputs = Array.prototype.slice.call(
    document.querySelectorAll('input[type="radio"]'),
  ),
  preview = document.querySelector('.preview'),
  styleObj = { display: 'flex' },
  flexChildren = Array.prototype.slice.call(
    document.querySelectorAll('.flex-child'),
  ),
  childCount = document.getElementById('ChildCount'),
  childrenText = document.querySelector('.children-text'),
  copyPreview = document.getElementById('CopyPreview'),
  updateFlexParent = function (input) {
    flexParent.style[input.name] = input.value
  },
  updateExplanations = function () {
    var flexDirectionValue = document.querySelector(
      'input[name="flex-direction"]:checked',
    ).value
    flexDirectionValue.match('row')
      ? (controlsContainer.classList.add('row-is-selected'),
        controlsContainer.classList.remove('column-is-selected'))
      : flexDirectionValue.match('column') &&
        (controlsContainer.classList.add('column-is-selected'),
        controlsContainer.classList.remove('row-is-selected'))
  }
function updateCodePreview(input) {
  styleObj[input.name] = input.value
  input = JSON.stringify(styleObj, null, '\t')
  preview.innerHTML = input
    .replace(/"/g, '')
    .replace(/,/g, ';')
    .replace(/(align-content.*)(\n)/, '$1;\n')
}
copyPreview.addEventListener('click', (evt) => {
  navigator.clipboard.writeText(preview.innerHTML),
    (copyPreview.innerHTML = 'copied!'),
    copyPreview.classList.remove('copy-preview'),
    setTimeout(() => {
      ;(copyPreview.innerHTML = 'copy'),
        copyPreview.classList.add('copy-preview')
    }, 1500)
})
var inputListener = function (evt) {
  updateFlexParent(evt.target),
    updateExplanations(),
    updateCodePreview(evt.target)
}
propertyInputs.forEach(function (input) {
  input.addEventListener('change', inputListener),
    input.checked && (updateFlexParent(input), updateCodePreview(input))
}),
  (childCount.value = 8),
  childCount.addEventListener('input', function (evt) {
    var count = evt.target.value
    flexChildren.forEach(function (child, i) {
      count <= i ? child.classList.add('hide') : child.classList.remove('hide')
    }),
      (childrenText.innerHTML = 1 < count ? 'children' : 'child')
  }),
  updateExplanations()