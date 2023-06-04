N = int(input())
infos = list(map(int, input().split()))

cnt = 0
result = 0

for i in infos:
  if cnt == i:
    cnt += 1
    result += 1
    if cnt > 2:
      cnt = 0

print(result)