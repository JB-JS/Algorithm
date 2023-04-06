const fs = require('fs');

const [n, a, b] = fs.readFileSync('백준/1026/input.txt').toString().split('\n');

const as = a
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const bs = b.split(' ').map(Number);

let min = 0;

console.log(as);

for (let i = 0; i < n; i += 1) {
  const idx = bs.findIndex(el => el === Math.max(...bs));
  min += bs[idx] * as[i];
  bs.splice(idx, 1);
}

console.log(min);
