const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/1946/input.txt';

const [totalCnt, ...cases] = fs
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\n');

function solution(nums) {
  let min = nums[0][1];
  let cnt = 1;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i][1] < min) {
      min = nums[i][1];
      cnt += 1;
    }
  }
  console.log(cnt);
}

for (let i = 0; i < cases.length; i += 1) {
  solution(
    cases
      .slice(i + 1, +cases[i] + i + 1)
      .map(el => el.split(' ').map(Number))
      .sort((a, b) => a[0] - b[0]),
  );
  i += +cases[i];
}
