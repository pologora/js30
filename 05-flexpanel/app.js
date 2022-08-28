const panels = document.querySelectorAll('.panel')

function toggleOpen() {
  if (this.classList.contains('open')) {
    this.classList.remove('open')
  } else {
    panels.forEach((panel) => {
      panel.classList.remove('open')
    })
    this.classList.add('open')
  }
}

function toggleActive(e) {
  if (e.propertyName === 'flex' || e.propertyName === 'flex-grow') {
    this.classList.toggle('open-active')
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen))
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive))
