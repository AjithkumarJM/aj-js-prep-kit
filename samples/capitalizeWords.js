function capitalizeWords(str) {
  const capitalizedWord = str
    .split(' ')
    .map((data) => data.replace(data[0], data[0].toUpperCase()))
    .join(' ');

  return capitalizedWord;
}

const capitalizedWords2 = (str) => {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase + word.slice(1));
  }

  return words.join(' ');
};

const capitalizedWords3 = (str) => {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result.push(str[i].toUpperCase());
    }

    result.push(str[i]);
  }
};

const capitalizeWords4 = (str) => {
  let result = str[0].toUpperCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || str[i - 1] === undefined) {
      result += str[i].toUpperCase();
    } else result += str[i];
  }

  return result;
};


capitalizeWords('hi i am ajithkumar');
