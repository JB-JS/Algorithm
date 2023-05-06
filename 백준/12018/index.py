N, M = map(int, input().split())

result = []
answer = 0

for i in range(0, N):
  p, l = map(int, input().split())
  mileages = list(map(int, input().split()))
  mileages.sort(reverse=True)
  for j in range(0, l):
    if len(mileages) < l:
      result.append(1)
      break
    if j + 1 == l:
      result.append(mileages[j])

result.sort()

for i in result:
  if (M - i < 0):
    break
  M -= i
  answer += 1

print(answer)