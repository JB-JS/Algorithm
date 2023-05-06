A, B = map(int, input().split())
N = int(input())
favorites = [int(input()) for _ in range(N)]
result = 0

array = []
distance = abs(A - B)

for favorite in favorites:
  array.append(abs(favorite - B))

print(distance if distance <= min(array) else min(array) + 1)
