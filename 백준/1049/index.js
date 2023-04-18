const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/1049/input.txt';
const [[targetStr, totalCnt], ...input] = fs
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

let target = targetStr;

const setMin = Math.min(...input.map(el => el[0]));
const singleMin = Math.min(...input.map(el => el[1]));

let min = 0;

/**
 * 1. 단일가격 * 6이 세트가격보다 쌀경우 전부 단일가격으로 구매
 * 2. 세트가격이 더 쌀경우 세트가격으로 최대한 구매
 * 3. 총개수가 6개미만으로 되면 단일가격 * 총개수 가 세트가격보다 적을경우 구매
 *   아니면 세트가격으로 구매
 */

while (target > 0) {
  const singleSet = singleMin * 6;

  if (target >= 6) {
    min += Math.floor(target / 6) * (singleSet < setMin ? singleSet : setMin);
    target %= 6;
  } else {
    min += target * singleMin < setMin ? target * singleMin : setMin;
    target = 0;
  }
}

console.log(min);
