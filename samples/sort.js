function sort(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i ++) {        
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

console.log(sort([5, 1, 2, 4, 3, 7, 6]));
