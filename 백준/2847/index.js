const fs = require('fs');
const [levelCnt, ...levels] = fs
  .readFileSync('백준/2847/input.txt')
  .toString()
  .split('\n');

let prev = levels[levelCnt - 1];
let decrease = 0;

for (let i = levelCnt - 2; i >= 0; i -= 1) {
  let cv = +levels[i];

  while (cv >= prev) {
    cv -= 1;
    decrease += 1;
  }
  prev = cv;
}

console.log(decrease);
