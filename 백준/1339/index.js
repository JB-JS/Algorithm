const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/1339/input.txt';

const [totalCnt, ...input] = fs.readFileSync(PATH).toString().split('\n');

const words = input.map(el => el.split(''));
let max = 9;

const hash = {};

words.sort((a, b) => b.length - a.length);

for (let word of words) {
  for (let i = 0; i < word.length; i += 1) {
    hash[word[i]] = (hash[word[i]] || 0) + 10 ** +(word.length - i - 1);
  }
}

console.log(
  Object.values(hash)
    .sort((a, b) => b - a)
    .reduce((acc, cv) => {
      acc += cv * max;
      max -= 1;
      return acc;
    }, 0),
);
