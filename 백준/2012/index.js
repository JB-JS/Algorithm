const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/2012/input.txt';
const [totalCnt, ...input] = fs
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\n');

const ranks = input.map(el => +el);
let ans = 0;

ranks.sort((a, b) => a - b);

for (let i = 0; i < ranks.length; i++) {
  ans = (BigInt(ans) + BigInt(Math.abs(ranks[i] - (i + 1))))
    .toString()
    .replaceAll(',', '');
}

console.log(ans);
