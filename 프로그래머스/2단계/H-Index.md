# H-Index

## 풀이과정

1. h번 이상 된게 h 편 이상이어야 하는 숫자값을 구해야한다

## 어려웠던점

이번 정렬 문제는 문제파악이 잘되지않았던것같다 다른사람의 풀이식들을보고 어떻게 해석했는지 분석해봐야할거같다.
그리고 모든 배열값에 0이들어오는 예외케이스가있어서 잘안풀렸다 다음번에풀때는 질문사항을 보지않고 직접풀어볼수있게 실패하면 예외케이스를 한번 상정해보자

```javascript
function solution(citations) {
  const sort = citations.sort((a, b) => b - a);

  let no = citations.length;

  while (no > 0) {
    if (sort.filter(v => v >= no).length >= no) {
      return no;
      break;
    }

    no -= 1;

    if (!no) return 0;
  }
}
```
