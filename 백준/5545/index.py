N = int(input())
A, B = map(int, input().split())
C = int(input())

price = 0
cals = C
cnt = 0
result = int(cals / A)
datas = sorted([int(input()) for _ in range(N)], reverse=True)

for data in datas:
  cnt += 1
  cals += data
  price = A + B * cnt
  if result <= int(cals / price):
    result = int(cals / price)
  else:
    break

print(result)