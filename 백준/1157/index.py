word = list(input())

dic = {}

for v in word:
  v = v.lower()
  if v in dic:
    dic[v] += 1
  else:
    dic[v] = 1

max_value = max(dic.values())
max_keys = [key for key, value in dic.items() if value == max_value]

print('?' if len(max_keys) > 1 else max_keys[0].upper())