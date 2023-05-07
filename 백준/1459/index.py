x, y, w, s = map(int, input().split())

result = 0

if w * 2 < s:
  result += (x + y) * w
elif w < s:
  result += (min(x, y) * s) + w * abs(x - y)
else:
  if (x + y) % 2 == 0:
    result += s * max(x, y)
  else:
    result += (max(x, y) - 1) * s + w

print(result)