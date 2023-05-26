import math

A, B = map(int, input().split())
m = int(input())
lists = list(map(int, input().split()))
result = []
ten = 0

for i in range(m):
  ten += int(lists[i] * math.pow(A, m - i - 1))

while ten:
  result.append(str(ten % B))
  ten = ten // B

result  = result[::-1]
print(' '.join(result))