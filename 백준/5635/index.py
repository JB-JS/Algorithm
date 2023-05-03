n = int(input())

maxAge = 1989
minAge = 2011

names = []
array = []

for i in range(n):
  info = list(input().split())
  names.append(info[0])
  month = info[2] if int(info[2]) > 9 else '0' + info[2]
  day = info[1] if int(info[1]) > 9 else '0' + info[1]
  array.append(int(info[3] + month + day))

minIdx = array.index(min(array))
maxIdx = array.index(max(array))

print(names[maxIdx], names[minIdx])