n, k = map(int, input().split())
answer = 0

while n > 1:
  if  n % k != 0:
    target = int(n / k) * k
    answer += n - target
  n = n // k
  answer += 1
  
print(answer)