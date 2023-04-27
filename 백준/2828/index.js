const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/2828/input.txt';
const input = fs.readFileSync(PATH).toString().split('\n');

const [screen, size] = input[0].split(' ').map(el => +el);
const totalCnt = +input[1];
const locations = input.slice(2).map(el => +el);
let ans = 0;
let start = 1;
let end = size;

for (let i = 0; i < totalCnt; i++) {
  if (locations[i] > end) {
    const distance = locations[i] - end;
    ans += distance;
    start += distance;
    end = locations[i];
  }

  if (locations[i] < start) {
    const distance = start - locations[i];
    ans += distance;
    end -= distance;
    start = locations[i];
  }
}

console.log(ans);
