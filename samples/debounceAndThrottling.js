// DEBOUNCE
// The debounce() function forces a function to wait a certain amount of time before running again.
// The function is built to limit the number of times a function is called.

const debounce = (fn, delay) => {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      let context = this;

      fn.apply(context, args);
    }, delay);
  };
};

// THROTTLING
// Limit effective functions from executing;

const throttling = (fn, delay) => {
  let flag = true;

  return function (...args) {
    if (flag) {
      let context = this;

      fn.apply(context, args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
