n = int(input())
subject = [list(map(int, input().split())) for _ in range(n)]

subject.sort(key= lambda x : (x[0], x[1]))

result = 0
prev_day = 0
day = 0

acc = []

for d, w in subject:  
  if prev_day == d and day == d and w > min(acc):
    acc.remove(min(acc))
    day -= 1
  
  prev_day = d

  if d > day:
    day += 1
    acc.append(w)

print(sum(acc))