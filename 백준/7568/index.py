N = int(input())
datas = []

for i in range(N):
  datas.append(list(int, input().split()))

for w, h in datas:
  rank = 1

  for p, q in datas:
    if w < p and h < q:
      rank += 1

  print(rank, end = " ")
