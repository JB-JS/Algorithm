const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const cnt = input[0];
const distance = input[1].split(' ');
const prices = input[2].split(' ');
let currentPrice = +prices[0];
let cost = 0;
let isBig = false;

for (let i = 0; i < cnt - 1; i += 1) {
  const price = +prices[i];
  const dist = +distance[i];

  if (price < currentPrice) {
    currentPrice = price;
  }

  const num1 = BigInt(dist);
  const num2 = BigInt(currentPrice);
  const result = BigInt(cost) + num1 * num2;

  cost = result.toLocaleString().replace(/,/g, '');
}

console.log(cost);
