N = int(input())
ts = list(map(int, input().split()))
ts.sort(reverse=True)
m = 0

if len(ts) % 2 != 0:
  m = ts.pop(0)

for i in range(len(ts)):
  m = max(m, ts[i] + ts[len(ts) - (i + 1)])

print(m)