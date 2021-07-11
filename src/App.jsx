import React, { useState } from "react"
import styled from "styled-components"
import "./App.css"

import Button from "./components/Button"
import GameBoard from "./components/GameBoard"

// Simple app setup with a game board representing the actual
// game of life and a set of basic controls
// State should ideally be lifted up from the Gameboard component
// when implmenting additional controls like clearing the board

// As for performance improvements, most user-actions should be able to
// interrupt/skip the current rendering cycle for a more responsive feel
export default function App() {
  const [height] = useState(window.innerHeight)
  const [width] = useState(window.innerWidth)
  const [paused, setPaused] = useState(true)
  const [interval, setInterval] = useState(500)

  return (
    <StyledApp>
      <StyledContainer>
        <GameBoard
          height={height}
          width={width}
          paused={paused}
          scale={20}
          random
          interval={interval}
        />
        <StyledControls>
          <StyledLabel>
            Interval (ms)
            <input
              type="number"
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
            />
          </StyledLabel>
          {paused ? (
            <Button onClick={() => setPaused(false)}>Start</Button>
          ) : (
            <Button onClick={() => setPaused(true)}>Stop</Button>
          )}
        </StyledControls>
      </StyledContainer>
    </StyledApp>
  )
}

const StyledApp = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledContainer = styled.div`
  position: relative;
`

const StyledControls = styled.div`
  margin: 0 auto;
  padding: 1rem;
  position: absolute;
  top: 5vh;
  right: 5vh;
  background: #fff;
  border-radius: 4px;

  display: flex;
  flex: row;
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  input {
    width: 100px;
  }
`
