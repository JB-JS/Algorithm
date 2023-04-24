const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/2437/input.txt';

const [totalCnt, input] = fs.readFileSync(PATH).toString().split('\n');

const weights = input.split(' ').map(Number);
const max = Math.max(...weights);
let ans = null;
let exit = false;

weights.sort((a, b) => b - a);

let i = 0;

while (!exit) {
  i += 1;
  let temp = i;

  for (let j = 0; j < weights.length; j += 1) {
    if (weights[j] === i) {
      break;
    }
    if (temp >= weights[j]) {
      temp -= weights[j];
    }

    if (temp > 0 && j + 1 === weights.length) {
      ans = i;
      exit = true;
    }
  }
}

console.log(ans);
