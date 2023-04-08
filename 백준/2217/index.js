const fs = require('fs');
const [cnt, ...ropes] = fs
  .readFileSync('백준/2217/input.txt')
  .toString()
  .split('\n');

const sorted = ropes.sort((a, b) => a - b);

const parallelWeight = [];

for (let i = 0; i < sorted.length; i += 1) {
  parallelWeight.push(sorted[i] * (sorted.length - i));
}

console.log(Math.max(...parallelWeight));
