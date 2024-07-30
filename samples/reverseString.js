const reverse = (str) => {
  return str.split('').reverse().join('');
};

const reverse2 = (str) => {
  var reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
};

const reverse3 = (str) => {
  return str
    .split('')
    .reduce((reversed, character) => reversed + character, '');
};

const reverse4 = (str) => {
  let reverse = [];

  for (let i = str.split('').length - 1; i >= 0; i--) {
    reverse.push(str[i]);
  }

  return reverse.join('');
};

reverse('Ajithkumar');

function reverseNumber(number) {
  var revNumber = 0;
  
  while (number > 0) {
    revNumber = revNumber * 10 + (number % 10);    
    number = Math.floor(number / 10);
  }

  return revNumber;
};

console.log(reverseNumber(123));
