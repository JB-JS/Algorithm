const fs = require('fs');
let time = parseInt(fs.readFileSync('백준/10162/input.txt').toString(), 10);

const btnTimes = [300, 60, 10];
let cnt = [0, 0, 0];

while (time > 0) {
  const btnTime = btnTimes.find(el => time >= el);
  const idx = btnTimes.findIndex(el => time >= el);
  if (!btnTime) {
    cnt = -1;
    break;
  }
  cnt[idx] += Math.floor(time / btnTime);
  time %= btnTime;
}

console.log(Array.isArray(cnt) ? cnt.join(' ') : cnt);
