function miniMaxSum(arr) {
  // Write your code here
  let min = Math.min(...arr),
    max = Math.max(...arr),
    total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  console.log(total - min + " " + (total - max));
}

miniMaxSum([1, 2, 3, 4, 9]);
