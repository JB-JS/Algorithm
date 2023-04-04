const fs = require('fs');

const [candidateCount, electedVote, ...votes] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num)); // 숫자로 변환

let targetVote = electedVote;
let minPurchase = 0;

while (targetVote <= Math.max(...votes)) {
  let maxVote = Math.max(...votes);
  let maxVotesIndex = votes.indexOf(maxVote);
  const purchaseCnt =
    Math.ceil((maxVote - targetVote) % 2) % 2 === 0
      ? Math.ceil((maxVote - targetVote) % 2) + 1
      : Math.ceil((maxVote - targetVote) % 2);

  votes[maxVotesIndex] -= purchaseCnt;
  minPurchase += purchaseCnt;
  targetVote += purchaseCnt;
}

console.log(minPurchase);
