const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/2170/input.txt';
const [totalCnt, ...inputs] = fs
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\n');

const lines = inputs.map(el => el.split(' ').map(Number));

lines.sort((a, b) => a[0] - b[0]);

let start = lines[0][0];
let end = lines[0][1];
let ans = 0;

for (let i = 1; i < totalCnt; i += 1) {
  const [x, y] = lines[i];

  if (x > end) {
    ans += end - start;
    start = x;
  }
  end = Math.max(end, y);
}
ans += end - start;

console.log(ans);
