const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('input', onChange));

function onChange() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
