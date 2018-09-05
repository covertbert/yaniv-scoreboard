import React from 'react'
import PropTypes from 'prop-types'
import { Card, Text, Box, Button, Heading } from 'gestalt'

import GenericLayout from '../../components/GenericLayout'

const PlayerManagement = ({
  players,
  deletePlayer,
}) => (
  <GenericLayout>

    <Heading>Players</Heading>

    <Box
      marginTop={8}
      column={12}
    >
      {players.map((player) => (
        <Box
          key={player.id}
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
                {player.name}
              </Box>
            </Text>
            <Button
              accessibilityLabel="Delete player"
              color="red"
              text="Delete"
              onClick={() => { deletePlayer(player.id) }}
            />
          </Card>
        </Box>
      ))}
    </Box>
  </GenericLayout>
)

PlayerManagement.propTypes = {
  players: PropTypes.array.isRequired,
  deletePlayer: PropTypes.func.isRequired,
}

export default PlayerManagement
