n, m = map(int, input().split())

datas = [list(map(int, input().split())) for _ in range(n)]
  
k = int(input())

for _ in range(k):
  i, j, x, y = list(map(int, input().split()))
  acc = 0
  default_x = j

  for col in range(i, x + 1):
    for row in range(j, y + 1):
      acc += datas[col - 1][row - 1]
    
  print(acc)
