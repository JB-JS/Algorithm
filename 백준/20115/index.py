N = int(input())
drinks = list(map(int, input().split()))
drinks.sort()
result = drinks[-1]


for i in range(0, len(drinks) - 1):
  result += drinks[i] / 2

print(result)