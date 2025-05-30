#!/usr/bin/node
const args = process.argv.slice(2).map(Number);
if (args.length < 2) {
  console.log('0');
} else {
  const sort = args.sort((a, b) => b - a);
  const set = new Set(sort);
  const setarray = [...set];
  console.log(String(setarray[1]));
}
