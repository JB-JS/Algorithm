const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/10610/input.txt';

const input = fs.readFileSync(PATH).toString();

let acc = 0;
let isZero = false;

for (let i = 0; i < input.length; i += 1) {
  if (input[i] === '0') isZero = true;
  else acc += +input[i];
}

if (acc % 3 === 0 && isZero) {
  console.log(
    input
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  );
} else {
  console.log(-1);
}
