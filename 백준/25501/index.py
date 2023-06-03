T = int(input())

def recursion(s, l, r, c):
    c += 1
    if l >= r: return [1, c]
    elif s[l] != s[r]: return [0, c]
    else: return recursion(s, l+1, r-1, c)

def isPalindrome(s):
    cnt = 0
    return recursion(s, 0, len(s)-1, cnt)

for i in range(T):
  S = input()
  print(' '.join(map(str, isPalindrome(S))))