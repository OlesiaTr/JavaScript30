const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  list: document.querySelector('ul'),
};

fetch(endpoint)
  .then(r => r.json())
  .then(data => cities.push(...data))
  .catch(error => console.log(error));

const onMatch = (wordToMatch, cities) => {
  const regex = new RegExp(wordToMatch, 'gi');
  return cities.filter(el => el.city.match(regex) || el.state.match(regex));
};

function onInput() {
  const matchArr = onMatch(this.value, cities);
  const item = matchArr
    .map(item => {
      const regex = new RegExp(this.value, 'gi');
      const city = item.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const state = item.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return ` <li>
        <span class="name">${city}, ${state}</span>
        <span class="population">${numberWithCommas(item.population)}</span>
      </li>`;
    })
    .join(' ');

  refs.list.innerHTML = item;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

refs.input.addEventListener('input', onInput);
