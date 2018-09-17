import * as React from 'react'

import { Box, Button, Card, Text } from 'gestalt'

interface IProps {
  id: string,
  name: string,
  deletePlayerMutation(id: string): void,
}

const PlayerCard: React.SFC<IProps> = ({
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
    <Card>
      <Text
        align="center"
        bold={true}
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
export default PlayerCard
