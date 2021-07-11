import React, { useState } from "react"
import styled from "styled-components"

import Cell from "../Cell"
import { useInterval } from "../../hooks"
import { initBoard, getNextGeneration } from "../../utils/life"

export default function GameBoard({
  height,
  width,
  paused,
  scale,
  random,
  interval,
}) {
  const rows = Math.ceil(height / scale)
  const cols = Math.ceil(width / scale)
  const initialBoard = initBoard(rows, cols, random)
  const [boardState, setBoardState] = useState(initialBoard)

  // A "cell" in this case is just an x-y coordinate of the board
  // The whole purpose of the cell state is mostly to flatten the board state
  // so each cell can be rendered out
  const createCells = () => {
    const cellList = []
    for (let x = 0; x < rows; x += 1) {
      for (let y = 0; y < cols; y += 1) {
        cellList.push({ x, y })
      }
    }

    return cellList
  }

  const [cells, setCells] = useState(createCells(initialBoard))

  // Click on a cell will toggle its on/off state
  const handleCellClick = (x, y) => {
    const newBoard = boardState
    if (x >= 0 && x < rows && y >= 0 && y < cols) {
      newBoard[x][y] = newBoard[x][y] ? 0 : 1
    }

    setBoardState(newBoard)
    setCells(createCells(newBoard))
  }

  // Main looping part of the game board. Will update depending on the
  // value of the interval
  useInterval(() => {
    if (boardState && !paused) {
      const nextBoardState = getNextGeneration(boardState)
      const newCells = createCells(nextBoardState)
      setBoardState(nextBoardState)
      setCells(newCells)
    }
  }, interval)

  return (
    <StyledBoard width={width} height={height} scale={scale}>
      {cells.map((cell) => (
        <Cell
          x={cell.x}
          y={cell.y}
          scale={scale}
          toggleCell={handleCellClick}
          alive={boardState[cell.x][cell.y] === 1}
          key={`${cell.x},${cell.y}`}
        />
      ))}
    </StyledBoard>
  )
}

const StyledBoard = styled.div`
  width: ${(props) => props.width + 1}px;
  height: ${(props) => props.height + 1}px;
  position: relative;
  margin: 0;
  background-color: #000;
  background-image: linear-gradient(#333 1px, transparent 1px),
    linear-gradient(90deg, #333 1px, transparent 1px);
  background-size: ${(props) => `${props.scale}px ${props.scale}px`};
`
