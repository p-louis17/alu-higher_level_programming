#!/usr/bin/node
const arg = process.argv[2];
let i = 0;
if (Number.isInteger(Number(arg)) === true) {
  while (i < Number(arg)) {
    console.log('X'.repeat(arg));
    i += 1;
  }
} else {
  console.log('Missing size');
}
