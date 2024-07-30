/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let number = Number(digits.join("")) + 1;

  return number.toString().split("");
};

console.log(plusOne([1, 2, 3, 4]));
ƒ;
