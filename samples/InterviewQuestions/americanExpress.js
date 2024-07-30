// let memoizedOutput = {}; // {['stringConvertedFromInput']: 'value'};

// const memoize = (fn, input) => {
//   const key = input.sort().join("");

//   if (memoizedOutput[key]) {
//     // do the calc
//     return memoizedOutput[key];
//   } else {
//     // do the operation, store the result
//     const result = fn(...input);

//     memoizedOutput[key] = result;
//   }
// };

// const add = (a, b, c) => {
//     console.log('Add method called');

//     return a + b + c;
// };

// memoize(add, [1, 2, 3]);
// memoize(add, [1, 2, 3]);

// const sample = [1, 2, 3, 4, 5, 6];
// const target = 5;

// const findTargetIndex = (arr, target) => {
//     // quadratic complexity
//     // linear

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         if (arr[i] + arr[j] === target) {
//             return [i, j];
//         }
//     }
//   }
// };

// const result = findTargetIndex(sample, target);

// console.log(result, 'OUTPUT');
