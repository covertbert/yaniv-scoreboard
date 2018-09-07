import React from 'react'
import PropTypes from 'prop-types'

import { Box, Icon, Text } from 'gestalt'

const NoResults = ({
  message,
}) => (
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
      bold
      color="darkGray"
      size="xl"
    >
      {message}
    </Text>
  </Box>
)

NoResults.propTypes = {
  message: PropTypes.string.isRequired,
}

export default NoResults
