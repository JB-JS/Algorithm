const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/1213/input.txt';
const name = fs.readFileSync(PATH).toString().trim().split('');

name.sort();

let start = '';
let center = '';
let end = '';

for (let i = 0; i < name.length; i += 1) {
  if (name[i] === name[i + 1]) {
    start += name[i];
    end = name[i] + end;
    i += 1;
  } else {
    center += name[i];
  }
}

let sum = start + center + end;

if (
  sum
    .slice(Math.ceil(sum.length / 2))
    .split('')
    .reverse()
    .join('') !==
  sum
    .slice(0, Math.floor(sum.length / 2))
    .split('')
    .join('')
) {
  console.log("I'm Sorry Hansoo");
} else {
  console.log(sum);
}
