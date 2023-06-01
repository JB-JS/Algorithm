N, M = map(int, input().split())
weights = list(map(int, input().split())) if N > 0 else []

tmp_w = M
result = 0

for w in weights:
  if tmp_w == M:
    result += 1
    
  if tmp_w < w:
    result += 1
    tmp_w = M
    
  tmp_w -= w
  

print(result)