const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/13413/input.txt';
const [totalCount, ...input] = fs.readFileSync(PATH).toString().split('\n');

for (let i = 0; i < input.length; i += 3) {
  const start = input[i + 1];
  const end = input[i + 2];

  const startWlen = start.replaceAll('B', '').length;
  const startBlen = start.replaceAll('W', '').length;
  const endWlen = end.replaceAll('B', '').length;
  const endBlen = end.replaceAll('W', '').length;

  let answer = 0;

  console.log(startWlen, startBlen, endWlen, endBlen);

  const minW = startWlen > endWlen ? startWlen - endWlen : endWlen - startWlen;
  const minB = startBlen > endBlen ? startBlen - endBlen : endBlen - startBlen;

  if (startWlen === endWlen && startBlen === endBlen) {
    for (let j = 0; j < start.length; j++) {
      if (start[j] === 'W' && start[j] !== end[j]) {
        answer += 1;
      }
    }
  } else {
    answer = minW !== minB ? minW + minB : minW;
  }

  console.log(answer);
}
