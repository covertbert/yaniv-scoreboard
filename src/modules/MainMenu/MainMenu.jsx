import React from 'react'
import { Box, Button } from 'gestalt'
import CenterWrapper from '../../components/CenterWrapper'
// import { Link } from 'react-router-dom'

const MainMenu = () => (
  <CenterWrapper>
    <Box width="100%">
      <Box padding={2}>
        <Button accessibilityLabel="New Game" text="New game" color="blue" />
      </Box>
      <Box padding={2}>
        <Button accessibilityLabel="Load Game" text="Load game" />
      </Box>
    </Box>
  </CenterWrapper>
)

export default MainMenu
