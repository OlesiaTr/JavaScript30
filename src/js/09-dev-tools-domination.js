const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];
const p = document.querySelector('p');

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

p.addEventListener('click', makeGreen);

// Regular
console.log('hello');

// Interpolated
console.log(`hello I am a %s string`, '💩');

// Styled
console.log(
  '%c I am feeling great today',
  'color:tomato; font-size:20px; text-shadow: 5px 5px 0 white'
);

// warning!
console.warn('OH NOOOOO');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year~');

// Testing
console.assert(1 === 1, 'That is wrong'); //wont fire, cause its true
// console.assert(1 === 2, 'That is wrong'); //will fire, cause its false

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`); //or groupCollapsed
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Kira');

// timing
// console.time('first')
// console.timeEnd('first')

// table
// console.table([first])
