const refs = {
  panels: document.querySelector('.panels'),
  panel: document.querySelectorAll('.panel'),
};

refs.panel.forEach(el => el.addEventListener('click', isOpen));
refs.panel.forEach(el => el.addEventListener('transitionend', isActive));

function isOpen() {
  this.classList.toggle('open');
}

function isActive(e) {
  if (e.propertyName.includes('flex')) this.classList.toggle('is-active');
}
