const fs = require('fs');

const [psCnt, ...ps] = fs
  .readFileSync('백준/9012/input.txt')
  .toString()
  .split('\n')
  .map(el => el.split(''));

const getIsVps = v => {
  let vps = 'YES';

  let stack = [];

  v.forEach((el, idx) => {
    if (el === '(') {
      stack.push(el);
    } else {
      if (stack.length === 0) {
        vps = 'NO';
      }

      stack.pop();
    }
  });

  console.log(stack.length > 0 ? 'NO' : vps);
};

for (let i = 0; i < psCnt; i += 1) {
  getIsVps(ps[i]);
}
