a,b,c = map(int, input().split())
d = int(input())

total = a * 3600 + b * 60 + c + d

if total >= 86400:
  total %= 86400
a = 0
b = 0
c = 0

if total >= 3600:
  a += total // 3600
  total %= 3600
if total >= 60:
  b += total // 60
  total %= 60
  if b > 60:
    a += 1
    b -= 60
c = total

print(a, b, c, ' ')