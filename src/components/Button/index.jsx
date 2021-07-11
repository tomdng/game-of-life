import React from "react"
import styled from "styled-components"

export default function Button({ children, onClick }) {
  return (
    <StyledButton onClick={onClick} type="button">
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border: solid #fff 2px;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
`
