function reverseInt(num) {
  let negativeValue = Math.sign(num) === -1;
  let str = num.toString();
  let reverse = [];

  for (let i = str.split('').length - 1; i >= 0; i--) {
    reverse.push(str[i]);
  }

  if (negativeValue) {
    reverse.pop();
    reverse.unshift('-');
  }

  return parseInt(reverse.join(''));
}

function reverseInt2(num) {
  const reversed = num.toString().split('').reverse().join('');

  if (n < 0) {
    return parseInt(reversed) * -1;
  }

  return parseInt(reversed);
}

function reverseInt3(num) {
  const reversed = num.toString().split('').reverse().join('');

  return parseInt(reversed) + Math.sign(num);
}

console.log(reverseInt(-12));