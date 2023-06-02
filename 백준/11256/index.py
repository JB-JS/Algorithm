T = int(input())

for i in range(T):
  j, N = map(int, input().split())
  sizes = []
  result = 0
  for _ in range(N):
    r,c = map(int, input().split())
    sizes.append(r * c)

  sizes.sort(reverse=True)
  
  for size in sizes:
    if j <= 0:
      break
    j -= size
    result += 1

  print(result)
