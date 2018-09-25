import React from 'react'

import { Card, Text, Box, Button } from 'gestalt'

type Props = {
  id: String,
  name: String,
  actionType: 'delete' | 'addToGame' | 'removeFromGame',
  deletePlayerMutation: Function,
  addPlayerToGame: Function,
  removePlayerFromGame: Function,
}

const PlayerCard = ({
  id,
  name,
  actionType,
  deletePlayerMutation,
  addPlayerToGame,
  removePlayerFromGame,
}:
Props) => (
  <Box
    marginBottom={5}
    paddingY={5}
    paddingX={5}
    column={12}
    color="lightGray"
  >
    <Card paddingY={10}>
      <Text
        align="center"
        bold
        size="xl"
      >
        <Box
          marginBottom={3}
          paddingX={1}
          paddingY={1}
        >
          {name}
        </Box>
      </Text>

      {actionType === 'delete' && (
        <Button
          accessibilityLabel="Delete player"
          color="red"
          text="Delete"
          onClick={() => { deletePlayerMutation(id) }}
        />
      )}

      {actionType === 'addToGame' && (
        <Button
          accessibilityLabel="Add to game"
          color="blue"
          text="Add"
          onClick={() => { addPlayerToGame({ name, id }) }}
        />
      )}

      {actionType === 'removeFromGame' && (
        <Button
          accessibilityLabel="Remove from game"
          color="red"
          text="Remove"
          onClick={() => { removePlayerFromGame(id) }}
        />
      )}
    </Card>
  </Box>
)

export default PlayerCard
