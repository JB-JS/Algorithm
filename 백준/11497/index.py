T = int(input())

result = []

for _ in range(T):
  N = int(input())
  logs = list(map(int, input().split()))
  logs.sort(reverse=True)
  maxCnt = 0

  for i in range(N):
    first = logs[i + 1] if i + 1 < N - 1 else logs[i - 1]
    second = logs[i + 2] if i + 2 < N - 1 else logs[i - 2]


    maxCnt = max(maxCnt, abs(logs[i] - first), abs(logs[i] - second))

  print(maxCnt)