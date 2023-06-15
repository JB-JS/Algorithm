N, K = map(int, input().split())
heights = list(map(int, input().split()))

result = 0
datas = []

for i in range(len(heights)):
  if i > 0:
    datas.append(heights[i] - heights[i - 1])

datas.sort()

for i in range(len(datas) - (K -1)):
  result += datas[i]

print(result)