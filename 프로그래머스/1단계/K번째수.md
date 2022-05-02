# K번쨰수

## 풀이과정

1. 주어진커맨드의 start, end 로 배열을 쪼개고 내림차순 정렬한값에서 n번째 요소의 숫자를 리턴하면된다.

```javascript
function solution(array, commands) {
  return commands.flatMap(command => {
    const [start, end, index] = command;

    return array.slice(start - 1, end).sort((a, b) => a - b)[index - 1];
  });
}
```
