function MyPromise(executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isCalled = false,
    isRejected = false,
    value;

  this.then = function (callback) {
    onResolve = callback;

    if (isFulfilled && !isCalled) {
      isCalled = true;

      // if a given value in a resolve method is a promise
      if (Object.prototype.toString.call(value) === "[object Promise]") {
        value.then((result) => onResolve(result));
      } else {
        onResolve(value);
      }
    }

    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      onReject(value);
      isCalled = true;
    }

    return this;
  };

  function resolve(val) {
    isFulfilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

// Resolve polyphill

MyPromise.resolve = (val) => {
  return new MyPromise((resolve) => resolve(val));
};

// Reject polyphill

MyPromise.reject = (val) => {
  return new MyPromise((reject) => reject(val));
};

// promise.all polyphill
// implementation 1

MyPromise.myAll = (promises) => {
  return new Promise((resolve, reject) => {
    let output = [];

    if (!promises.length) {
      resolve(output);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, idx) => {
      // .then(onFulfilled, onRejected);
      Promise.resolve(promise).then((result) => {
        output[idx] = result;
        pending--;

        if (pending === 0) {
          resolve(output);
        }
      }, reject);
    });
  });
};

// implementation 2
Promise.myAll2 = (promises) => {
  let output = [];

  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      promise
        .then((result) => {
          output.push(result);

          if (idx === promises.length - 1) {
            resolve(output);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

// Promise.all([Promise.resolve(2), Promise.reject(3), Promise.resolve(4)])
//   .then((d) => console.log(d, "test"))
//   .catch((d) => console.log(d, "fail"));

// MyPromise.resolve(Promise.resolve(2)).then((d) => console.log(d, "new"));
// Promise.resolve(Promise.resolve(2)).then((d) => console.log(d, "new"));
// MyPromise.resolve(2);
