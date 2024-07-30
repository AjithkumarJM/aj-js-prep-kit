const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 },
  { name: "Ajith", age: 46 },
];

const binarySearch = (array, target, key) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = array[mid][key];

    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const targetAge = 45;
const index = binarySearch(people, targetAge, "age");
console.log(index); // Output: 2 (index of the object with age 35 in the sorted array)
