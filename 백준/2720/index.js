const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/2720/input.txt';
const [total, ...input] = fs.readFileSync(PATH).toString().trim().split('\n');

const units = [25, 10, 5, 1];
const moneys = input.map(Number);

for (let i = 0; i < +total; i += 1) {
  const result = [0, 0, 0, 0];

  for (let j = 0; j < units.length; j += 1) {
    if (moneys[i] >= units[j]) {
      result[j] = Math.floor(moneys[i] / units[j]);
      moneys[i] %= units[j];
    }
  }

  console.log(result.join(' '));
}
