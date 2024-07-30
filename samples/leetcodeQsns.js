// Leet code #1

const uniqueElems = (nums) => {
  let output = [],
    valuesAndItsReps = {};

  for (let num of nums) {
    if (valuesAndItsReps[num] !== undefined) {
      valuesAndItsReps[num]++;
    } else {
      valuesAndItsReps[num] = 1;
    }
  }

  for (let key in valuesAndItsReps) {
    const value = valuesAndItsReps[key];

    if (value === 1) {
      output.push(key);
    }
  }

  return output;
};

// Leet code #2

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return [];
};

// console.log(twoSum([2, 8, 11, 3], 11));

var addTwoNumbers = function (l1, l2) {
  let output = [];

  if (Array.isArray(l1) && Array.isArray(l2)) {
    output = (+l1.reverse().join("") + +l2.reverse().join(""))
      .toString()
      .split("")
      .reverse();
  }

  return output;
};

console.log(addTwoNumbers([1, 3], [2, 3, 3]));
