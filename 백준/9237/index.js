const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/9237/input.txt';
const [totalCount, input] = fs.readFileSync(PATH).toString().split('\n');

const seedlings = input.split(' ').map(Number);

seedlings.sort((a, b) => b - a);
let ans = 0;

for (let i = 0; i < totalCount; i += 1) {
  if (ans < seedlings[i] + i + 1) {
    ans = seedlings[i] + i + 1;
  }
}

console.log(ans + 1);
