import React from 'react'
import PropTypes from 'prop-types'

import { Card, Text, Box, Button } from 'gestalt'

const PlayerCard = ({
  id,
  name,
  deletePlayerMutation,
}) => (
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
      <Button
        accessibilityLabel="Delete player"
        color="red"
        text="Delete"
        onClick={() => { deletePlayerMutation(id) }}
      />
    </Card>
  </Box>
)

PlayerCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deletePlayerMutation: PropTypes.func.isRequired,
}

export default PlayerCard
