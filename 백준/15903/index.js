const fs = require('fs');

const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/15903/input.txt';

const [cnts, input] = fs.readFileSync(PATH).toString().trim().split('\n');

class MinHeap {
  constructor() {
    this.heap = [,];
  }
  push(x) {
    this.heap.push(x);
    let idx = this.heap.length - 1;

    while (idx !== 1) {
      const par = Math.floor(idx / 2);

      if (this.heap[par] <= this.heap[idx]) break;

      [this.heap[idx], this.heap[par]] = [this.heap[par], this.heap[idx]];

      idx = par;
    }
  }
  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    let min = this.heap[1];
    this.heap[1] = this.heap.pop();
    let idx = 1;

    while (idx * 2 < this.heap.length) {
      const lc = idx * 2;
      const rc = idx * 2 + 1;
      let minChild = lc;

      if (rc <= this.heap.length && this.heap[rc] < this.heap[lc]) {
        minChild = rc;
      }

      if (this.heap[idx] < this.heap[minChild]) break;
      [this.heap[idx], this.heap[minChild]] = [
        this.heap[minChild],
        this.heap[idx],
      ];
      idx = minChild;
    }

    return min;
  }
}

let [totalCnt, mergeCnt] = cnts.split(' ').map(Number);
const cards = input.split(' ').map(Number);

const minHeap = new MinHeap();

cards.sort((a, b) => a - b);

for (let card of cards) {
  minHeap.push(card);
}

while (mergeCnt > 0) {
  mergeCnt -= 1;
  const num1 = minHeap.pop();
  const num2 = minHeap.pop();
  const sum = +(BigInt(num1) + BigInt(num2))
    .toLocaleString()
    .replaceAll(',', '');
  minHeap.push(sum);
  minHeap.push(sum);
}

console.log(
  minHeap.heap.reduce((acc, cv) => {
    const num1 = BigInt(acc);
    const num2 = BigInt(cv);

    const sum = num1 + num2;

    return sum.toLocaleString().replaceAll(',', '');
  }, 0),
);
