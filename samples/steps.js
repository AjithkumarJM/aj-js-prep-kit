function steps(n) {
  for (let row = 0; row < n; row++) {
    let steps = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        steps += '#';
      } else {
        steps += ' ';
      }
    }
    console.log(steps);
  }
}

steps(2);

function steps(n, row = 0, stair = '') {
  for (let i = 0; i < n; i++) {
    if (i <= row) {
      stair += '#';
    } else {
      stair += 'p';
    }
  }

  if (n > row) {
    console.log(stair);

    steps(n, row + 1);
  } else return;
}

steps(5);
