function formFibonacci(n) {
  if (n < 2) return n;

  return formFibonacci(n - 1) + formFibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(formFibonacci(i));
}
