const fs = require('fs');
const cases = fs
  .readFileSync('백준/4796/input.txt')
  .toString()
  .split('\n')
  .map(el => el.split(' ').map(Number));

for (let i = 0; i <= cases.length - 1; i += 1) {
  let sumDay = 0;
  let [day, sequenceDay, total] = cases[i];

  if (day === 0 && sequenceDay === 0 && total === 0) {
    return;
  }

  sumDay +=
    Math.floor(total / sequenceDay) * (day > sequenceDay ? sequenceDay : day);
  sumDay += total % sequenceDay >= day ? day : total % sequenceDay;
  console.log(`Case ${i + 1}: ${sumDay}`);
}
