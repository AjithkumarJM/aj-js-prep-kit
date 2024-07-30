function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

const isPalindrome = (str) => {
  return str.split('').reverse().join('') === str;
};

palindrome('abba');
