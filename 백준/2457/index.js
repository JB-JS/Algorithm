const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/2457/input.txt';
const [flowerCnt, ...input] = fs.readFileSync(PATH).toString().split('\n');

let flowers = input
  .map(el => el.split(' ').map(Number))
  .map(el => [el[0] * 100 + el[1], el[2] * 100 + el[3]])
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

let endDate = 301;
let count = 0;
let max = 0;
let isFind = false;
let startIdx = 0;

while (endDate < 1201) {
  isFind = false;

  for (let i = startIdx; i < flowerCnt; i++) {
    if (flowers[i][0] > endDate) {
      break;
    }
    if (max < flowers[i][1]) {
      max = flowers[i][1];
      startIdx = i + 1;
      isFind = true;
    }
  }

  if (isFind) {
    endDate = max;
    count += 1;
  } else {
    break;
  }
}

if (max < 1201) {
  console.log(0);
} else {
  console.log(count);
}

// while (flowers.length) {
//   if (endDate >= 1201 || flowers[flowers.length - 1][0] > endDate) break;

//   let tmpEnd = -1;

//   for (let v of flowers) {
//     if (flowers[flowers.length - 1][0] <= endDate) {
//       if (tmpEnd <= flowers[flowers.length - 1][1]) {
//         tmpEnd = flowers[flowers.length - 1][1];
//       }
//       flowers.pop();
//     }
//   }

//   endDate = tmpEnd;
//   cnt += 1;
// }
