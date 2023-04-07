const fs = require('fs');

const [first, ...coins] = fs
  .readFileSync('백준/11047/input.txt')
  .toString()
  .split('\n');

let [cnt, price] = first.split(' ');
const useCoins = [];

let min = 0;

for (let i = 0; i < cnt; i += 1) {
  if (+coins[i] > price) {
    break;
  }

  useCoins.push(+coins[i]);
}

for (let i = useCoins.length - 1; i >= 0; i -= 1) {
  if (price < useCoins[i]) continue;
  if (price === 0) break;
  min += Math.floor(price / useCoins[i]);
  price = price % useCoins[i];
}

console.log(min);
