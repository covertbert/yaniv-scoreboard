import React from 'react'
import { Box, Button } from 'gestalt'

type Props = {
  createPlayerMutation: Function,
};

const NewPlayerButton = ({ createPlayerMutation }: Props) => (
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

export default NewPlayerButton
