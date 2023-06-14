N, k = map(int, input().split())
nums = list(map(int, input().split()))

nums.sort(reverse=True)
result = 0

for i in range(k):
  result += nums[i] - i

print(result)