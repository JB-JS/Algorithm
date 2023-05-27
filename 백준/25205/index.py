n = input()
s = input()

support = 'qwertasdfgzxcv'
last = s[-1]

if last in support:
  print(1)
else:
  print(0)