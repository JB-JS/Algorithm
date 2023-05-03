n = int(input())
directions = input().split()

start = [1, 1]

for v in directions:
  if v == 'R':
    start[1] += 1 if start[1] < 5 else 0
  elif v == 'L':
    start[1] -= 1 if start[1] > 1 else 0
  elif v == 'U':
    start[0] -= 1 if start[0] > 1 else 0
  elif v == 'D':
    start[0] += 1 if start[0] < 5 else 0

print(start[0], start[1])