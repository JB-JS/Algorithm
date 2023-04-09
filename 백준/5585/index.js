const fs = require('fs');
let amount =
  1000 - parseInt(fs.readFileSync('백준/5585/input.txt').toString(), 10);
let cnt = 0;

const moneys = [500, 100, 50, 10, 5, 1];

for (let i = 0; i < moneys.length; i += 1) {
  if (amount <= 0) break;

  if (amount >= moneys[i]) {
    cnt += Math.floor(amount / moneys[i]);
    amount %= moneys[i];
  }
}

console.log(cnt);
