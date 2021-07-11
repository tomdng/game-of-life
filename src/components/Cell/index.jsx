import React from "react"
import styled from "styled-components"

export default function Cell({ x, y, scale, toggleCell, alive }) {
  const handleCellClick = () => {
    toggleCell(x, y)
  }

  return (
    <StyledCell
      className="Cell"
      x={x}
      y={y}
      scale={scale}
      onClick={handleCellClick}
      alive={alive}
    />
  )
}

// Use the styled components attrs() method for performance reasons so
// extra css classes do not get generated due to the conditional styles
const StyledCell = styled.div.attrs((props) => ({
  style: {
    width: `${props.scale - 1}px`,
    height: `${props.scale - 1}px`,
    left: `${props.scale * props.y + 1}px`,
    top: `${props.scale * props.x + 1}px`,
    background: props.alive ? "#B1F791" : "none",
  },
}))`
  position: absolute;
`
