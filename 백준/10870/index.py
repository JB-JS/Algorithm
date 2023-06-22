n = int(input())
result = 0
fibos = []

for i in range(n + 1):
  if i > 1:
    fibos.append(fibos[i - 1] + fibos[i - 2])
  else:
    fibos.append(i)
    

print(fibos[n])