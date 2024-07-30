var f = 'aabcaddd';

function getMaxOccurences(str) {
  let occurences = {};
  let temp = 0;
  let maxOccurredChar = '';

  for (let char of str) {
    if (occurences[char] !== undefined) {
      occurences[char]++;
      temp = temp < occurences[char] && occurences[char];

      if (occurences[char] === temp) {
        maxOccurredChar = char;
      }
    } else {
      occurences[char] = 0;
    }
  }

  return maxOccurredChar;
}

getMaxOccurences(f);