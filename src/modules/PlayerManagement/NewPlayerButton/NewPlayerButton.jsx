import React from 'react'
import PropTypes from 'prop-types'

import { Box, Button } from 'gestalt'

const NewPlayerButton = ({
  createPlayerMutation,
}) => (
  <Box
    marginTop={4}
    column={12}
  >
    <Button
      accessibilityLabel="Add Player"
      text="Add player"
      color="blue"
      onClick={() => createPlayerMutation('Tom')}
    />
  </Box>
)

NewPlayerButton.propTypes = {
  createPlayerMutation: PropTypes.func.isRequired,
}

export default NewPlayerButton
