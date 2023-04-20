const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/1449/input.txt';
const input = fs.readFileSync(PATH).toString().split('\n');

const [total, tapeLen] = input[0].split(' ');

const tapes = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let prevPointer = 0;
let answer = 0;

for (let i = 0; i < total; i++) {
  if (prevPointer < tapes[i]) {
    prevPointer = tapes[i] + +tapeLen - 1;
    answer += 1;
  }
}

console.log(tapes, answer);
