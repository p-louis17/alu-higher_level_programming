#!/usr/bin/node
const input = process.argv[2];
function factorial (n) {
  if (isNaN(n)) {
    return 1;
  }
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(Number(input)));
