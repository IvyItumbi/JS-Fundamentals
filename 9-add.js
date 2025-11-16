#!/usr/bin/node
function add(a, b) {
  return a + b;
}

const n1 = parseInt(process.argv[2], 10) || 0;
const n2 = parseInt(process.argv[3], 10) || 0;
console.log(add(n1, n2));