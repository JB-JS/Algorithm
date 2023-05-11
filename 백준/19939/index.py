n, k = map(int, input().split())

cnt = 0
acc = 0

for i in range(k):
  acc += i + 1

n -= acc

if n < 0:
  print(-1)
else:
  if n % k == 0:
    print(k - 1)
  else:
    print(k)