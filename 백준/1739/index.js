const fs = require('fs');
const max = +fs.readFileSync('백준/1739/input.txt').toString();

let sum = 0;
let result = 1;

for (let i = 1; i <= max; i += 1) {
  sum += i;

  if (sum > max) {
    result = i - 1;
    break;
  }
}

console.log(result);
