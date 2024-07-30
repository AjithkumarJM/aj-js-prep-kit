function consecutiveN(arr) {
  let output = {};
  let n = '';

  for (let num of arr) {
    if (output[num] !== undefined) {
      if (n === num) {
        output[num]++;
      }
    } else {
      output[num] = 0;
    }

    n = num;
  }

  console.log(output);
}

consecutiveN([1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 7, 7, 7, 7, 7, 8]);
