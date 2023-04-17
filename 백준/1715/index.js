const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : '백준/1715/input.txt';
const [total, ...nums] = fs.readFileSync(PATH).toString().trim().split('\n');

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

      [this.heap[par], this.heap[idx]] = [this.heap[idx], this.heap[par]];

      idx = par;
    }
  }
  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const top = this.heap[1];

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

    return top;
  }
}

const minHeap = new MinHeap();

for (let i = 0; i < total; i += 1) {
  minHeap.push(+nums[i]);
}

let ans = 0;

while (minHeap.heap.length > 2) {
  const sum = minHeap.pop() + minHeap.pop();
  console.log(sum);

  ans += sum;
  minHeap.push(sum);
}
console.log(ans);
