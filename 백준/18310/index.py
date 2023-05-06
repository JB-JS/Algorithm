N = int(input())
locations = list(map(int, input().split()))

locations.sort()

print(locations[int(N - 1 / 2)])