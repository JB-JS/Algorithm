const fs = require('fs');
let input = fs.readFileSync('백준/1541/input.txt').toString();

input = input.replaceAll('-', ' - ').replaceAll('+', ' + ');

const arr = input.split(' ');
arr.find((el, idx) => {
  if (el === '-') {
    if (arr[idx - 1]) {
      arr[idx - 1] = '(' + arr[idx - 1];
    }
    if (arr[idx + 1]) {
      arr[idx + 1] = arr[idx + 1] + ')';
    }
  }
});

console.log(eval(arr.join('')));
