const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/8980/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [totalVillage, volume] = input[0].split(' ').map(Number);
const totalBox = +input[1];
const villages = input.slice(2).map(el => el.split(' ').map(Number));

const capacitys = Array(totalVillage + 1).fill(volume);

let answer = 0;

villages.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

for (let v of villages) {
  const [start, end, weight] = v;
  let min = volume;

  for (let i = start; i < end; i++) {
    min = min > capacitys[i] ? capacitys[i] : min;
  }

  min = min > weight ? weight : min;

  for (let i = start; i < end; i++) {
    capacitys[i] -= min;
  }

  answer += min;
}
console.log(answer);
