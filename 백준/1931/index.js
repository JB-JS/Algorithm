const fs = require('fs');

const [cnt, ...meetings] = fs
  .readFileSync('백준/1931/input.txt')
  .toString()
  .split('\n');

const as = meetings.map(el => el.split(' '));

console.log(as);
