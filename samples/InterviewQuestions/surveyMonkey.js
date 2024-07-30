// 1. Solve the problem, input [1, 2, 3, 5] -> find the missing Number, if all numbers present increase the last number
// 2. what is reconciliation vs diffing algorithm
// 3. what is custom hook
// 4. write a component where you need to build circle inside circle based on the props, <CircleContainer circles={5} /> -> this should render 5 circles nested to one other

// --- Anser for first question ----

// My Ans
// const getMissingNum = (arr) => {
//   let output;

//   const arrToString = arr.join("");
//   const lowest = arr.sort()[0];
//   const highest = arr.sort().at(-1);

//   for (let i = lowest; i <= highest; i++) {
//     if (!arrToString.includes(i)) {
//       if (!output) {
//         output = i;

//         break;
//       }
//     }
//   }

//   if (!output) {
//     output = highest + 1;
//   }

//   return output;
// };


// Chat gpt Ans
const getMissingNum = (arr) => {
  // Create a set from the array for O(1) lookups
  const numSet = new Set(arr);

  // Get the minimum and maximum values in the array
  const lowest = Math.min(...arr);
  const highest = Math.max(...arr);

  // Loop through the range and find the first missing number
  for (let i = lowest; i <= highest; i++) {
    if (!numSet.has(i)) {
      return i; // Return the first missing number
    }
  }

  // If no number is missing in the range, return the next number after the highest
  return highest + 1;
};

console.log(getMissingNum([1, 2, 4, 5]), "Final output");
