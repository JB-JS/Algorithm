const fs = require('fs');
let input = fs
  .readFileSync('백준/1439/input.txt')
  .toString()
  .trim()
  .split('')
  .map(Number);

let prev = input[0];
let moveCnt = 0;

for (let i = 0; i < input.length; i += 1) {
  if (prev !== input[i]) {
    if (input[i] !== input[i + 1]) {
      moveCnt += 1;
    }

    input[i] = prev;
  }
}

console.log(moveCnt);
