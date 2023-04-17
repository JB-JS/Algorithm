const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/16953/input.txt';
let [start, target] = fs.readFileSync(PATH).toString().trim().split(' ');
let cnt = 1;

while (true) {
  if (start === target) {
    break;
  } else if (+target < start) {
    return console.log(-1);
  }

  if (target % 2 === 0) {
    target = String(target / 2);
  } else if (target % 2 === 1) {
    if (target[target.length - 1] === '1') {
      target = target.slice(0, target.length - 1);
    } else {
      return console.log(-1);
    }
  }

  cnt += 1;
}

console.log(cnt);
