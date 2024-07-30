// check if a value is an an object/Array/number by passing diff types inside call
Object.prototype.toString.call([]) ===
  "[object Array]"(
    // ---------------------------------

    // b is not defined
    function () {
      var a = b;
      b = 3;
    }
  )();

console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

// ---------------------------------

var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);

// ---------------------------------

console.log(1 + "2" + "2"); // 122
console.log(1 + +"2" + "2"); // 32
console.log(1 + -"1" + "2"); // 02

console.log(+"1" + "1" + "2"); // 112
console.log("A" - "B" + "2"); // Nan2
console.log("A" - "B" + 2); // Nan

// ---------------------------------

var list = readHugeList();
[];

var nextListItem = function () {
  var item = list.pop(); // undefined

  if (item) {
    // process the list item...
    return nextListItem();
  }

  return;
};

nextListItem();

// ---------------------------------

var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123; // {key: 'b'}
a[c] = 456;

// If you add object as a key it'll update like { [object Object]: value }
console.log(a[b]);

// ---------------------------------

var length = 10;

function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn(); //  10;
    arguments[0]();
  },
};

obj.method(fn, 1);

// first calls fn and print lenght is 5 and via calling with arguments
// lexical scope of lenght is missing so it'll return the length of arguments 2

// ---------------------------------

(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x); // 1
  }
  console.log(x); // undefined
  console.log(y); // 2
})();

// ---------------------------------

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl(); // 20;

// ---------------------------------
