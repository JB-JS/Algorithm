const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/2864/input.txt';
let [a, b] = fs.readFileSync(PATH).toString().split(' ');

let min = 0;
let max = 0;

a = a.replaceAll('5', '6');
b = b.replaceAll('5', '6');
max = +a + +b;
a = a.replaceAll('6', '5');
b = b.replaceAll('6', '5');
min = +a + +b;

console.log(min, max);
