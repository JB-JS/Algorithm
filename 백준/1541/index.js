const fs = require('fs');
let input = fs.readFileSync('백준/1541/input.txt').toString();

let min = 0;

input.split('-').map((str, idx) => {
  const sum = str
    .split('+')
    .map(Number)
    .reduce((acc, cv) => (acc += cv), 0);

  if (idx === 0) min = sum;
  else min -= sum;
});

console.log(min);
