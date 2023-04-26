const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/16435/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

let [totalCnt, initSize] = input[0].split(' ').map(el => +el);
const fruits = input[1].split(' ').map(el => +el);

fruits.sort((a, b) => a - b);

for (let i = 0; i < totalCnt; i++) {
  if (fruits[i] > initSize) break;

  initSize += 1;
}

console.log(initSize);
