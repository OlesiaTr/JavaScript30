const refs = {
  player: document.querySelector('.player'),
  video: document.querySelector('video'),
  progress: document.querySelector('.progress'),
  progressBar: document.querySelector('.progress__filled'),
  toggle: document.querySelector('.toggle'),
  ranges: document.querySelectorAll('.player__slider'),
  btns: document.querySelectorAll('[data-skip]'),
};

let mousemove = false;

refs.video.addEventListener('click', togglePlay);
refs.toggle.addEventListener('click', togglePlay);

refs.video.addEventListener('play', handleBtnUpdate);
refs.video.addEventListener('pause', handleBtnUpdate);

refs.btns.forEach(btn => btn.addEventListener('click', handleSkip));

refs.ranges.forEach(range =>
  range.addEventListener('change', handleRangeUpdate)
);

refs.video.addEventListener('timeupdate', handleProgressBar);

refs.progress.addEventListener('click', handleScrub);
refs.progress.addEventListener('mousemove', e => mousemove && handleScrub(e));
refs.progress.addEventListener('mousedown', () => (mousemove = true));
refs.progress.addEventListener('mouseup', () => (mousemove = false));

function togglePlay() {
  const method = refs.video.paused ? 'play' : 'pause';
  refs.video[method]();
}

function handleBtnUpdate() {
  refs.toggle.textContent = refs.video.paused ? '►' : '❚ ❚';
}

function handleSkip() {
  refs.video.currentTime += Number(this.dataset.skip);
}

function handleRangeUpdate() {
  refs.video[this.name] = this.value;
}

function handleProgressBar() {
  const percent = (refs.video.currentTime / refs.video.duration) * 100;
  refs.progressBar.style.flexBasis = `${percent}%`;
}

function handleScrub(e) {
  const scrub = (e.offsetX / refs.progress.offsetWidth) * refs.video.duration;
  refs.video.currentTime = scrub;
}
