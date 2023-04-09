const fs = require('fs');

const [total, ...meetings] = fs
  .readFileSync('백준/1931/input.txt')
  .toString()
  .split('\n');

let rooms = meetings
  .map(el => el.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

let cnt = 1;
let end = rooms[0][1];

for (let i = 1; i < total; i += 1) {
  if (rooms[i][0] >= end) {
    cnt += 1;
    end = rooms[i][1];
  }
}

console.log(cnt);
