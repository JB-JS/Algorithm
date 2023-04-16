const fs = require('fs');

const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/1927/input.txt';

const [cnt, ...numbers] = fs
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const heap = [,];

const push = x => {
  heap.push(x);
  let idx = heap.length - 1;

  while (idx !== 1) {
    let par = Math.floor(idx / 2);
    if (heap[par] <= heap[idx]) break;
    [heap[par], heap[idx]] = [heap[idx], heap[par]];
    idx = par;
  }
};

const pop = () => {
  if (heap.length <= 2) {
    return heap.pop();
  }

  const min = heap[1];
  heap[1] = heap.pop();
  let idx = 1;

  while (2 * idx < heap.length) {
    const lc = 2 * idx;
    const rc = 2 * idx + 1;
    let minChild = lc;

    if (rc <= heap.length && heap[rc] < heap[lc]) {
      minChild = rc;
    }

    if (heap[idx] <= heap[minChild]) break;
    [heap[idx], heap[minChild]] = [heap[minChild], heap[idx]];
    idx = minChild;
  }

  return min;
};

const result = [];

for (let n of numbers) {
  if (heap.length === 1 && n === 0) {
    result.push(0);
    continue;
  }

  n === 0 ? result.push(pop()) : push(n);
}

console.log(result.join('\n'));
