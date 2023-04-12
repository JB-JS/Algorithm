const fs = require('fs');

const [cnt, ...input] = fs
  .readFileSync('백준/11501/input.txt')
  .toString()
  .split('\n');

for (let i = 0; i < +cnt; i += 1) {
  const arr = input[2 * i + 1].split(' ').map(Number);
  let k = arr.length - 1;
  let max = arr[k];
  let sum = 0;

  while (k >= 0) {
    console.log(max, arr[k]);
    if (max < arr[k]) {
      max = arr[k];
    } else {
      sum += max - arr[k];
    }
    k -= 1;
  }

  console.log(sum);
}
