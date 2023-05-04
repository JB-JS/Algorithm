N = int(input())

items = [int(input()) for _ in range(N)]

items.sort(reverse=True)
result = 0

for i in range(0, len(items)):
  if (i + 1) % 3:
    result += items[i]

print(result)