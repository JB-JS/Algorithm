total = int(input())

for i in range(total):
  N, m = map(int, input().split())
  queue = list(map(int, input().split()))
  result = 1
  cnt = 0

  while True:
    if len(queue) == 1:
      break
    
    if queue[0] < max(queue[1:]):
      if m == cnt:
        cnt = 0
        m = len(queue)
      v = queue.pop(0)
      queue.insert(len(queue), v)
    elif m == cnt:
      break
    else:
      queue.pop(0)
      result += 1
    cnt += 1

  print(result)