N = int(input())

scores = []

for _ in range(N):
  name, en, ko, math = input().split()
  scores.append([name] + list(map(int, [en, ko, math])))

result = sorted(scores, key=lambda x : (-x[1], x[2], -x[3], x[0]))

for x in result:
  print(x[0])