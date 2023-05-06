N = int(input())

for i in range(N):
  cnt = int(input())
  words = list(input().split())
  result = []

  for w in words:
    if len(result) == 0:
      result.append(w)
      continue
    if ord(result[0]) >= ord(w):
      result.insert(0, w)
    else:
      result.append(w)
  print(''.join(result))