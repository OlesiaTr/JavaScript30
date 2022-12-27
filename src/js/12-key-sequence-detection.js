const storedKeys = [];
const secretWord = 'grapes';

window.addEventListener('keyup', e => {
  storedKeys.push(e.key);
  storedKeys.splice(
    -secretWord.length - 1,
    storedKeys.length - secretWord.length
  );

  if (storedKeys.join('').includes(secretWord)) cornify_add();
});
