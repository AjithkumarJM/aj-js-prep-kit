// ------------------------------------------------------------------------------------
// BALANCED PARANTHESIS

let isBalanced = (input) => {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let bracket of input) {
    // bracket === '{' || bracket === '[' || bracket === '('
    if (Object.keys(map).some((paranthesis) => paranthesis === bracket)) {
      stack.push(bracket);
    } else {
      bracket === map[stack.pop()] ? stack.length === 0 : null;
    }
  }

  console.log(stack.length === 0);
  return stack.length === 0;
};