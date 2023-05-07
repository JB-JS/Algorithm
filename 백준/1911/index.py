import math
n, l = map(int, input().split())

coordinates = [list(map(int, input().split())) for _ in range(n)]

coordinates.sort(key= lambda x : x[0])

result = 0
prevStart = 0
prevEnd = 0

for start, end in coordinates:

  if prevStart > start:
    start = prevStart

  if end > prevEnd:
    prevEnd = end

    result += math.ceil((prevEnd - start) / l)

    if start + math.ceil((prevEnd - start) / l) * l > prevEnd:
      prevStart = start + math.ceil((prevEnd - start) / l) * l

print(result)
