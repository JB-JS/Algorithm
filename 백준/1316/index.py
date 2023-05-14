n = int(input())

result = 0

for i in range(n):
  word = list(input())
  prevWord = []
  prev = ''
  is_group = True

  for w in word:
    if prev != w and w in prevWord:
      is_group = False
      break
    else:
      prevWord.append(w)

    prev = w

  if is_group:
    result += 1

print(result)