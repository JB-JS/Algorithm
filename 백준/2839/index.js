const fs = require('fs');

let cnt = fs.readFileSync('백준/2839/input.txt').toString();
let result = 0;

while (cnt !== 0) {
  if (cnt % 5 === 0) {
    result += cnt / 5;
    cnt = 0;
    continue;
  }

  if (cnt < 3) {
    result = -1;
    cnt = 0;
    break;
  }
  cnt -= 3;
  result += 1;
}

console.log(result);
