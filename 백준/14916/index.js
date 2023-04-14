const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/14916/input.txt';

let price = fs.readFileSync(PATH).toString();
let cnt = 0;

while (price > 0) {
  if (price % 5 === 0) {
    cnt += Math.floor(price / 5);
    break;
  }
  if (price < 2) {
    cnt = -1;
    break;
  }
  price -= 2;
  cnt += 1;
}

console.log(cnt);
