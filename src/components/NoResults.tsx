import * as React from 'react'

import { Box, Icon, Text } from 'gestalt'

interface IProps {
  message: string,
}

const NoResults: React.SFC<IProps> = ({ message }) => (
  <Box
    alignItems="center"
    justifyContent="center"
    display="flex"
    color="lightGray"
    padding={12}
  >
    <Box
      marginRight={1}
      padding={1}
    >
      <Icon
        icon="bell"
        accessibilityLabel="Bell"
        color="darkGray"
      />
    </Box>
    <Text
      align="center"
      bold={true}
      color="darkGray"
      size="xl"
    >
      {message}
    </Text>
  </Box>
)

export default NoResults
