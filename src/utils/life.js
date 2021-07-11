// Game of Life algorithm taken from
// https://rosettacode.org/wiki/Conway%27s_Game_of_Life#JavaScript
export function initBoard(height, width, random = false) {
  const board = new Array(height)
  for (let x = 0; x < height; x += 1) {
    board[x] = new Array(width)
    for (let y = 0; y < width; y += 1) {
      board[x][y] = random ? Math.round(Math.random()) : 0
    }
  }
  return board
}

export function getNextGeneration(board) {
  const boardNext = new Array(board.length)
  for (let i = 0; i < board.length; i += 1) {
    boardNext[i] = new Array(board[i].length)
  }
  for (let x = 0; x < board.length; x += 1) {
    for (let y = 0; y < board[x].length; y += 1) {
      let n = 0
      for (let dx = -1; dx <= 1; dx += 1) {
        for (let dy = -1; dy <= 1; dy += 1) {
          if (dx === 0 && dy === 0) {
            // Do nothing
          } else if (
            typeof board[x + dx] !== "undefined" &&
            typeof board[x + dx][y + dy] !== "undefined" &&
            board[x + dx][y + dy]
          ) {
            n += 1
          }
        }
      }
      let c = board[x][y]
      switch (n) {
        case 0:
        case 1:
          c = 0
          break
        case 2:
          break
        case 3:
          c = 1
          break
        default:
          c = 0
      }
      boardNext[x][y] = c
    }
  }
  return boardNext.slice()
}

// Debug function to visualize a board
export function printBoard(board) {
  for (let x = 0; x < board.length; x += 1) {
    let l = ""
    for (let y = 0; y < board[x].length; y += 1) {
      if (board[x][y]) l += "X"
      else l += " "
    }
    // eslint-disable-next-line
    console.log(l)
  }
}
