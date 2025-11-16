#!/usr/bin/node
const a = process.argv[2];
const b = process.argv[3];
console.log(`${a ?? 'undefined'} is ${b ?? 'undefined'}`);