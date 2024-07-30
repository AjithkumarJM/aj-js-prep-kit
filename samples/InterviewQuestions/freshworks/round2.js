function hello() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(["HELLO", "world", "third", "fourth"]), 3000)
  );
}

function world() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("WORLD"), 2000)
  );
}

function getHelloWorld() {
  hello().then((data) => {
    const [_, b] = data;
    console.log(b);
  });

  promise.all([hello, world]).then((data) => ["hello", "world"].join(" "));
}

getHelloWorld();

setTimeout(function () {
  console.log("A");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("B");
  })
  .then(function () {
    console.log("C");
  });

console.log("D");

// "D B C A"

console.log("aJithkumar".alternateCaps());

String.prototype.alternateCaps = function () {
  let output = "";

  for (let i = 0; i < this.split("").length; i++) {
    if (i % 2 === 1) output += this[i].toLowercase();
    else output += this[i].toUpperCase();
  }

  for (let char of this.split("")) {
    this.replace(
      char,
      this.split("").indexOf(char) % 2 === 1
        ? char.toUpperCase()
        : char.toLowerCase()
    );
  }

  return output;
};

Array.prototype.forOf = function () {
  let output = [];

  for (let a of this) output.push(a);
  return output;
};

const sum = function () {
  const a = arguments; // [1, 2, 3]
  return function () {
    const b = arguments; // [4];
    const output = [...a, ...b].reduce((acc, val) => acc + val, 0);

    if (b) sum(output);
    else a.reduce((acc, value) => acc + value, 0);
  };
};

sum(1, 2, 3)(4)(5, 6);
