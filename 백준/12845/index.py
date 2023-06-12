N = int(input())
levels = list(map(int, input().split()))

idx = levels.index(max(levels))
result = 0


for i in range(len(levels)):
  if i == idx:
    continue
  result += levels[idx] + levels[i]
  
print(result)