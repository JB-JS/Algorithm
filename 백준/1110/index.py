n = input()
count = 0
acc = '0' + n if int(n) < 10 else n

while True:
  count += 1

  sum = str(int(acc[0]) + int(acc[1]))
  acc = str(acc[1] + sum[-1])

  if int(n) == int(acc):
    break
  
print(count)