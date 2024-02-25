document.addEventListener('DOMContentLoaded', function () {
  const demoSection = document.querySelector('.demo')
  const animationButtons = document.querySelectorAll('.animation-trigger')
  animationButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const animationClass = button.getAttribute('data-animation')
      demoSection.querySelector('h2').classList = ''
      demoSection.querySelector('h2').classList.add(animationClass)
    })
  })
})
