const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/15904/input.txt';
const text = fs.readFileSync(PATH).toString();
let temp = text;

let ans = Array(4).fill(null);
const ucpc = 'UCPC';

for (let i = 0; i < temp.length; i++) {
  for (let j = 0; j < ans.length; j++) {
    if (
      ((j === 0 && !ans[j]) || (!ans[j] && ans[j - 1])) &&
      temp[i] === ucpc[j]
    ) {
      ans[j] = ucpc[j];
    }
  }
}

console.log(ans.join('') === 'UCPC' ? 'I love UCPC' : 'I hate UCPC');
