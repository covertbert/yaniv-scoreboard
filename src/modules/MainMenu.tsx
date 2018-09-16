import * as React from 'react'
import { Link } from 'react-router-dom'

import { Box, Button } from 'gestalt'

import CenterWrapper from '../components/CenterWrapper'

const MainMenu: React.SFC = () => (
  <CenterWrapper>
    <Box width="100%">
      <Box padding={2}>
        <Link to="/new-game">
          <Button
            accessibilityLabel="New Game"
            text="New game"
            color="blue"
          />
        </Link>
      </Box>
      <Box padding={2}>
        <Link to="load-game">
          <Button
            accessibilityLabel="Load Game"
            text="Load game"
          />
        </Link>
      </Box>
    </Box>
  </CenterWrapper>
)

export default MainMenu
