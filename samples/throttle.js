// The throttle() is a function which has 2 args, and returns it's callback function with some delay between it's previous invocation.

const throttle = (fn, delay) => {
  let flag = true;

  return (...args) => {
    if (flag) {
      flag = false;
      return fn(...args);
    }

    setTimeout(() => {
      flag = false;
    }, delay);
  };
};
