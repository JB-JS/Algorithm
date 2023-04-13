const fs = require('fs');

const [cnt, ...sequence] = fs
  .readFileSync('백준/1744/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

sequence.sort((a, b) => {
  if (b <= 0 && a <= 0) {
    return a - b;
  }
  return b - a;
});

let sum = 0;

for (let i = 0; i < +cnt; i += 1) {
  if (
    ((sequence[i] > 0 && sequence[i + 1] !== 0) ||
      (sequence[i] === 0 && sequence[i + 1]) ||
      (sequence[i] < 0 && sequence[i + 1] <= 0)) &&
    sequence[i] !== 1 &&
    sequence[i + 1] !== 1 &&
    sequence[i] * sequence[i + 1] >= 0
  ) {
    sum += sequence[i] * sequence[i + 1];
    i += 1;
  } else {
    sum += sequence[i];
  }
}

console.log(sum);
