grade = int(input())

result = ''

if grade >= 90:
  result = 'A'
elif grade >= 80:
  result = 'B'
elif grade >= 70:
  result = 'C'
elif grade >= 60:
  result = 'D'
else:
  result = 'F'

print(result)