row = {
  'a': 1,
'b': 2,
'c': 3,
'd': 4,
'e': 5,
'f': 6,
'g': 7,
'h': 8,
}

text = input()

x, y = row[text[0]], int(text[1])

ds = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]]
result = 0

for v in ds:
  if x + v[0] <= 8 and x + v[0] > 0 and y + v[1] <= 8 and y - v[1] > 0:
    result += 1

print(result)