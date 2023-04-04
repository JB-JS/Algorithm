const fs = require('fs');

const cmds = fs.readFileSync('백준/10845/input.txt').toString().split('\n');
const cmdCnt = cmds[0];

class Queue {
  constructor() {
    this.queue = [];
    this.frontIdx = 0;
    this.rear = 0;
    this.result = [];
  }

  push(v) {
    this.queue[this.rear++] = v;
  }

  pop() {
    const value = this.queue[this.frontIdx];

    this.result.push(value || -1);

    if (value) {
      delete this.queue[this.frontIdx];
      this.frontIdx += 1;
    }
  }
  size() {
    this.result.push(this.rear - this.frontIdx);
  }
  empty() {
    this.result.push(this.rear - this.frontIdx <= 0 ? 1 : 0);
  }
  front() {
    this.result.push(this.queue[this.frontIdx] || -1);
  }
  back() {
    this.result.push(this.queue[this.rear - 1] || -1);
  }
}

const queue = new Queue();

for (let i = 1; i <= cmdCnt; i += 1) {
  const cmd = cmds[i];

  if (cmd.includes('push')) {
    queue.push(cmd.split(' ')[1]);
    continue;
  }

  queue[cmd]();
}

console.log(queue.result.join('\n'));
