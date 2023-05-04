N = int(input())
result = 0

orders = []

for i in range(0, N):
  orders.append(int(input()))

orders.sort(reverse=True)

for i in range(0, N):
  if (orders[i] - (i + 1 - 1) > 0):
    result += orders[i] - (i + 1 - 1)

print(result)