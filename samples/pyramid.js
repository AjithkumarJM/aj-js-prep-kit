function pyramid(n) {
  const midPoint = Math.floor((2 * (n - 1)) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midPoint - row <= column && midPoint + row >= column) {
        level += "$";
      } else {
        level += "_";
      }
    }

    console.log(level);
  }
}

pyramid(2);

function moreSimplerPyramid(rows) {
  // Input validation (optional but recommended)
  if (typeof rows !== "number" || rows <= 0) {
    throw new Error(
      "Invalid input: Please provide a positive integer for rows."
    );
  }

  for (let i = 1; i <= rows; i++) {
    // Create spaces for each row
    let spaces = " ".repeat(rows - i);

    // Create stars for each row (using repeat method)
    let stars = "*".repeat(i * 2 - 1);

    // Combine spaces and stars for output
    console.log(spaces + stars);
  }
}

function staircase(rows) {
  // Write your code here
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);

    let stars = "#".repeat(i);

    console.log(spaces + stars);
  }
}

// Example usage
moreSimplerPyramid(5);
