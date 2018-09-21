import React from 'react'
import { Box, Button } from 'gestalt'

type Props = {
  createPlayerMutation: Function,
};

const NewPlayerButton = ({ createPlayerMutation }: Props) => (
  <Box
    marginTop={4}
    marginBottom={6}
    column={12}
  >
    <Button
      accessibilityLabel="Add Player"
      text="New player"
      color="blue"
      onClick={() => createPlayerMutation('Tom')}
    />
  </Box>
)

export default NewPlayerButton
