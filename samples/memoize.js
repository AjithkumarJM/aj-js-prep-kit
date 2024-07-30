// Memoize

// cache prev result and improve performance

function memoize(fn, context) {
  let output = {};

  return function (...args) {
    let parseArgs = JSON.stringify(args);

    if (!output[parseArgs]) {
      output[parseArgs] = fn.call(this || context, ...args);
    }

    return output[parseArgs];
  };
}

const sum = (a, b) => a + b;

const memoizedSum = memoize(sum);

console.time("test");
console.log(memoizedSum(2, 3));
console.timeEnd("test");

console.time("test-1");
console.log(memoizedSum(2, 3));
console.timeEnd("test-1");
