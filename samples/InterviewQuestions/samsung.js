// 1. find the leftmost, rightmost, home -- tree traversing
// 2. inventory management system of manufacturing company, how do you define classes

// problem statement

// pring all the edges of the given tree
// leftmost, rightmost and the leaves

//         25
//       /    \
//     7       26
//   / \       / \
//  5   12    24  27
//      / \
//     10 14

// [25, 7, 26, 5, 12, 24, 27, null, null, 10, 14, null ,null, null, null]

// answer - [25, 7, 5, 10, 14, 24, 27, 26 ]

let output = [];

const findEdges = (input) => {
  let tree = {};

  for (let i = 0; i <= input.length; i++) {
    tree = { [input[i]]: input.slice(i + 1, i + 2) }; // {25: [7, 26], 7: [5, 12], 26: [24, 28], 5: [null, null], 12: [10, 14], 24: [null, null] 27: [null, null]}
  }

  for (let key in tree) {
    const value = tree[key],
      hasNull = value.filter((it) => it !== null).length;

    let beforeNullIdx, afterNullIdx;

    if (hasNull) {
      output.push(key);
    } else {
      if (beforeNullIdx) {
        // get keys of the obj till beforeNullIdx, push it to output
      } else if (afterNullIdx) {
        value.map((leaf) => output.push(leaf));
      }
    }
  }

  return output;
};

// vehicle manufacturing company with vehicles ranging from small, medium and large
// Inventory management is the software that you would design
