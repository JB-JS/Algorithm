B, C, D = map(int, input().split())
bugerPrices = list(map(int, input().split()))
sidePrices = list(map(int, input().split()))
drinkPrices = list(map(int, input().split()))

bugerPrices.sort()
sidePrices.sort()
drinkPrices.sort()

total = sum(bugerPrices) + sum(sidePrices) + sum(drinkPrices)
salePrice = int(total * 0.9)

if B > D or B > C:
  for i in range(B - min(D, C)):
    salePrice += int(bugerPrices[i] * 0.1)

if C > D or C > B:
  for i in range(C - min(D, B)):
    salePrice += int(sidePrices[i] * 0.1)
if D > C or D > B:
  for i in range(D - min(C, B)):
    salePrice += int(drinkPrices[i] * 0.1)

print(total)
print(salePrice)
