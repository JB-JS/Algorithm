s = input()
t = list(input())

# while s != t:
#   if len(s) >= len(t):
#     break

#   print(t[:len(s) + 1])
  
#   if s[::-1] + 'B' == t[:len(s) + 1]:
#     s = s[::-1] + 'B'
#   else:
#     s += 'A'

while s != ''.join(t):
  if len(t) <= len(s):
    break

  if t[-1] == 'A':
    t.pop()
  elif t[-1] == 'B':
    t.pop()
    t.reverse()

print(1 if s == ''.join(t) else 0)