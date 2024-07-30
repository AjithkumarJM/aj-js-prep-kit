function getDuplicate(numA) {
  let count = [];

  for (let i = 0; i < numA.length; i++) {
    if (count.some((data) => data.value === numA[i])) {
      for (let c = 0; c < count.length; c++) {
        if (count[c].value === numA[i]) {
          count[c].repeated = count[c].repeated + 1;
        }
      }
    } else {
      count.push({
        value: numA[i],
        repeated: 0,
      });
    }
  }

  for (let i = 0; i < count.length; i++) {
    let data = count[i];

    data.repeated > 0 &&
      console.log(`The value ${data.value} repeated ${data.repeated} times`);
  }
}

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  console.log(maxChar, max); // b 3
  return maxChar;
}

maxChar('aabbb');
