N, K = map(int, input().split())
array = list(input())
result = 0

visited = [0] * len(array)

for i in range(len(array)):
  if array[i] == 'P':
    
    for j in range(max(i - K, 0), min(i + K + 1, len(array))):
      if array[j] == 'H':
        visited[j] = 1
        break
      
print(len(list(filter(lambda x : x == 1, visited))))