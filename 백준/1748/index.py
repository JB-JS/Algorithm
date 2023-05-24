N = input()

comp = len(N) - 1
result = 0

for i in range(comp):
  result += 9 * (10 ** i) * (i + 1)
  i += 1
  
result += ((int(N) - (10 ** comp)) + 1) * (comp + 1)
print(result)