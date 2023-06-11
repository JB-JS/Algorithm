N = int(input())
words = [input() for _ in range(N)]
words.sort(key=len)

result = 0

for i in range(len(words)):
  isGroup = True
  for j in range(i + 1, len(words)):
    if words[i] == words[j][:len(words[i])]:
      isGroup = False
      break
  if isGroup:
    result += 1

print(result)