n, k = map(int, input().split())
orders = list(map(int, input().split()))

result = 0

queue = []

for i in range(len(orders)):
  if orders[i] in queue:
    continue

  if len(queue) >= n:
    rest = orders[i:]
    idxs = []
    last_value = 0
    
    for v in queue:
      if not v in rest:
        last_value = v
        break
      idxs.append( {v: rest.index(v)} )

    if last_value == 0:
      last_value = max(max(idxs, key=lambda x: list(x.values())[0]).keys())
    
    del queue[queue.index(last_value)]
    result += 1

  queue.append(orders[i])


print(result)