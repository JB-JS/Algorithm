N = int(input())
K = int(input())

board = [[0] * N for _ in range(N)]
x, y = [0, 0]
direction = 1
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
time = 0
snake = [[0, 0]]

for i in range(K):
  col, row = map(int, input().split())
  board[col - 1][row - 1] = 'a'

L = int(input())

info = []

for _ in range(L):
  s, c = input().split()

  info.append([int(s), c])

while True:
  time += 1

  # 머리이동
  x = x + dx[direction]
  y = y + dy[direction]

  # 벽에 부딪힐 경우 게임끝
  if x < 0 or y < 0 or x > N - 1 or y > N - 1:
    break
  # 자기자신의 몸에 부딪힐 경우 게임끝
  if [x, y] in snake:
    break

  # 방향 전환정보 초가 같을경우 방향전환
  for v in info:
    if time == v[0]:
      if v[1] == 'L':
        if direction == 0:
          direction = 3
        else:
          direction -= 1
      elif v[1] == 'D':
        if direction == 3:
          direction = 0
        else:
          direction += 1

  # 머리 넣어주기
  snake.append([x, y])
  
  # 사과를 먹지않을경우 꼬리제거
  if board[x][y] != 'a':
    snake.pop(0)
  elif board[x][y] == 'a':
    board[x][y] = 1
  
print(time)