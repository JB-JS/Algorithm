const fs = require('fs');

const result = fs.readFileSync('백준/11399/input.txt').toString().split('\n');

const times = result[1].split(' ').sort();
let min = 0;

for (let i = 0; i < result[0]; i += 1) {
  for (let j = 0; j <= i; j += 1) {
    min += +times[j];
  }
}
console.log(min, times);
