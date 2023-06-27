word = list(input())

for i in range(ord('a'), ord('z')+1):
  if chr(i) in word:
    print(word.index(chr(i)))
  else:
    print(-1)