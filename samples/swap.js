let colors = ['b', 'b', 'r', 'b'];

function swap(data) {
  let done = true;

  while (done) {
    done = false;
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[i] === 'b') {
          done = false;
          let tmp = data[i - 1];
          data[i - 1] = data[i];
          data[i] = tmp;
        }
      }
    }
  }
  console.log(data);
}

swap(colors);
