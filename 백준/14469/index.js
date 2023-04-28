const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/14469/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const totalCnt = +input[0];
const cows = input.slice(1).map(el => el.split(' ').map(el => +el));

cows.sort((a, b) => a[0] - b[0]);

let answer = cows[0][0] + cows[0][1];

for (let i = 1; i < totalCnt; i++) {
  const [start, enter] = cows[i];

  answer = answer >= start ? answer + enter : start + enter;
}

console.log(answer);
