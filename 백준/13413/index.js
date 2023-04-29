const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/13413/input.txt';
const [totalCount, ...input] = fs
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; i += 3) {
  const start = input[i + 1].split('');
  const end = input[i + 2].split('');
  let ans = 0;

  const sw = start.filter(el => el === 'W').length;
  const sb = start.filter(el => el === 'B').length;
  const ew = end.filter(el => el === 'W').length;
  const eb = end.filter(el => el === 'B').length;

  const minW = sw > ew ? sw - ew : ew - sw;
  const minB = sb > eb ? sb - eb : eb - sb;

  let min = Math.min(minW, minB);

  for (let j = 0; j < start.length; j += 1) {
    if (min === 0) break;

    if (start[j] !== end[j]) {
      if (min) {
        min -= 1;
      }
      ans += 1;
      start[j] = start[j] === 'W' ? 'B' : 'W';
    }
  }

  for (let j = 0; j < start.length; j += 1) {
    if (start[j] !== end[j]) {
      ans += 0.5;
    }
  }

  if (
    !start.includes('W') ||
    !start.includes('B') ||
    !end.includes('W') ||
    !end.includes('B')
  ) {
    console.log(ans);
    continue;
  }

  console.log(ans);
}
