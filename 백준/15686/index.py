from itertools import combinations

n, m = map(int, input().split())

graph = []
  
house = []
chicken = []
result = 1e9

for r in range(n):
  graph.append(list(map(int, input().split())))
  for c in range(n):
    if graph[r][c] == 1:
      house.append((r, c))
    elif graph[r][c] == 2:
      chicken.append((r, c))

candidates = list(combinations(chicken, m))

def get_sum(candidate):
  
  result = 0
  for hx, hy in house:
    temp = 1e9
    for cx, cy in candidate:
      temp = min(temp, abs(hx - cx) + abs(hy - cy))
    result += temp

  return result

print(candidates)

for candidate in candidates:
  print(candidate)
  result = min(result, get_sum(candidate))

print(result)