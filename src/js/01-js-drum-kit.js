const refs = {
  body: document.querySelector('body'),
  keys: document.querySelectorAll('.key'),
};

refs.body.addEventListener('keydown', onKeyDown);
refs.keys.forEach(key =>
  key.addEventListener('transitionend', removeTransition)
);

function onKeyDown(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //rewinds to start of the audio
  audio.play();

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
