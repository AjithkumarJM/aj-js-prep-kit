const vowels = (str) => {
  const arr = str.toLowerCase().split('');

  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

  const vowelN = arr.reduce(
    (acc, value) => (vowelsArr.some((d) => d === value) ? acc + 1 : acc),
    0
  );

  console.log(vowelN);
};

const vowels = (str) => {
  const count = 0;

  const checker = 'aeiou';

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  console.log(count);
};

const vowels = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

vowels('why?');
