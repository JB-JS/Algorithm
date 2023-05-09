n, m = map(int, input().split())

words = [[0, 0, 0, 0] for _ in range(m)]

dnas = sorted(['A', 'T', 'G', 'C'])

for i in range(n):
  dna = list(input())

  for j in range(len(dna)):
    words[j][dnas.index(dna[j])] += 1

result = ''
hammingDistance = 0

for word in words:
  maxCnt = 0
  maxIdx = 0
  for i in range(len(word)):
    if maxCnt < word[i]:
      maxCnt = word[i]
      maxIdx = i
  del word[maxIdx]
  hammingDistance += sum(word)
  result += dnas[maxIdx]

print(result)
print(hammingDistance)
