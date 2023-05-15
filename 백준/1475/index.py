n = list(map(int, input()))

cnts = {}

for v in n:
  if not v in cnts:    
    cnts[v] = 1
  else:
    cnts[v] += 1

flip = 0

if 9 in cnts:
  flip += cnts[9]
if 6 in cnts:
  flip += cnts[6]

flip = int(flip / 2) + flip % 2

if flip != 0:
  cnts[9] = flip
  cnts[6] = flip

print(max(dict(filter(lambda x : x[1] > 1, cnts.items())).values() or [1]) )