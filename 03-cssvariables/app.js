const inputs = document.querySelectorAll('input.controls')

function handleUpdate() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach((input) => input.addEventListener('input', handleUpdate))
