const isInt = (num) => {
  return num % 1 === 0;
};

isInt(2);

// ------------------------------------------------------------------------------------

const isPalindrome = (str) => {
  if (reverseString(str) === str) {
    return true;
  }

  return false;
};

isPalindrome('solos');

// ------------------------------------------------------------------------------------

const callbackSample = (number, showAlert) => {
  showAlert(number + 1);

  return number + 1;
};

callbackSample(2, (num) => num);

// ------------------------------------------------------------------------------------

const user = { name: 'Ajithkumar' };

// freeze prevents object from updating,
// only work for object data type
Object.freeze(user);

user.name = 'Kumar';

// ------------------------------------------------------------------------------------
// Check if a variable is array or object

// returns 'object'
typeof user;

// returns '[object Object]'
Object.prototype.toString.call(user);

// returns '[object Array]'
Object.prototype.toString.call([1, 2]);

// ------------------------------------------------------------------------------------

// https://www.fullstack.cafe/blog/javascript-code-interview-questions
// https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/#3-eagle-eye-test

// ------------------------------------------------------------------------------------
// CURRYING function

const add = (a) => (b) => (c) => a * b * c;

add(1)(3)(3);

// ------------------------------------------------------------------------------------
// CLOSURE - CURRYING

const createBase = (baseNumber) => {
  return (N) => {
    return N ? baseNumber + N : baseNumber;
  };
};

let addSix = createBase(6);
addSix(10); // 16
addSix(21); // 27

// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
//  THROTTLE

// ------------------------------------------------------------------------------------
// PROTOTYPE INHERITANCE

var profile = {
  firstName: '',
  lastName: '',
  setName: function (name) {
    let splitNames = (n) => {
      let splitArray = n.split(' ');
      this.firstName = splitArray[0];
      this.lastName = splitArray[1];
    };

    splitNames(name);
  },
};

profile.setName('Clark Kent');

// isBalanced('{[]}'); // true

// -------------------------------------------------------------------------------------
// RECURIVE LOOP

var numA = [1, 3, 4, 5];

const recursiveLoop = (n, i = 0) => {
  let index = i;

  setTimeout(() => {
    console.log(n[index]);
    index++;

    if (n[index]) {
      recursiveLoop(n, index);
    }
  }, 1000);
};

function recursiveLoop2(numA) {
  for (let i = 0; i < a.length; i++) {
    setTimeout(function () {
      console.log(numA[i]);
    }, i * 1000);
  }
}

function recursiveLoop3(numA) {
  for (var i = 0; i < a.length; i++) {
    // -- i - global scope
    function close(i) {
      // -- i - function scope
      setTimeout(function () {
        console.log(numA[i]);
      }, i * 1000);
    }
    close(i);
  }
}

// recursiveLoop(numA);

// -------------------------------------------------------------------------------------
// FIND DUPLICATES

let dup = [1, 2, 1, 3, 4, 4, 4, 5, 5];
let start = [];

for (let int of dup) {
  if (!start.some((num) => num === int)) {
    start.push(int);
  }
}

dup.filter((data, index) => dup.indexOf(data) === index);

// console.log(dup
//   .filter((value, index, self) => index === self.indexOf(value))
//   .sort((a, b) => b - a));

// DUPLICATES WITH COUNT

let dupWithCount = {};

for (let int of dup) {
  dupWithCount[int] =
    dupWithCount[int] || dupWithCount[int] === 0 ? dupWithCount[int] + 1 : 0;
}

// console.log(dupWithCount);

// -------------------------------------------------------------------------------------
// ARMSTRONG NUMBER OR NOT

const isArmstrong = (num) => {
  const finalNumb = num
    .toString()
    .split('')
    .reduce((acc, val) => (acc += Math.pow(val, 3)), 0);

  return finalNumb === num;
};

// isArmstrong(407);

// -------------------------------------------------------------------------------------
// Longest string in an array

const words = ['Ajith', 'Ajithkumar', 'RajKamal', 'Tony Stark', 'steve'];

const longestString = (wordsArr) => {
  let longestWords = [];
  let wordProps = wordsArr
    .map((data, index) => {
      return { length: data.length, index };
    })
    .sort((a, b) => b.length - a.length);

  for (let word of wordProps) {
    if (
      longestWords.length === 0 ||
      longestWords.some((num) => num.length === word.length)
    ) {
      longestWords.push(word);
    }
  }

  return longestWords.map((num) => wordsArr[num.index]);
};

// console.log(longestString(words));

// -------------------------------------------------------------------------------------

const a = async () => {
  let res = await new Promise((resolve) =>
    setTimeout(() => resolve('hello'), 1000)
  );
  return res;
};

const b = () => 'World';

const c = async () => console.log((await a()) + ' ' + b());

// console.log(c());

async function d() {
  console.log(
    await new Promise((resolve) => setTimeout(() => resolve('hello'), 2000))
  );
}

// d();

// -------------------------------------------------------------------------------------

const isEqualsTo = (num, numA) => {
  let isEquals = false;

  numA.forEach((data, index) => {
    numA.forEach((data2, index2) => {
      if (data + data2 === num && index !== index2) {
        isEquals = true;
      }
    });
  });

  console.log(num, numA, isEquals);

  return isEquals;
};

// isEqualsTo(12, [2, 2, 11]);

// -------------------------------------------------------------------------------------

// console.log('Ajith');

// setTimeout(() => console.log('Callback inside timeout'), 5000);

// console.log('Kumar');

// let startDate = new Date().getTime();
// let endDate = startDate;

// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log('While expires');

// getDuplicate([3, 4, 5, 4, 6, 6, 7, 9, 8, 8, 8]);
