n = int(input())

nums = [i for i in range(1, n + 1)]
result = []

while len(nums) > 1:
  result.append(nums.pop(0))
  nums.append(nums.pop(0))

print(' '.join(str(x) for x in (result + nums)))
