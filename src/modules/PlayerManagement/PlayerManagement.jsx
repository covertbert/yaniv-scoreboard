import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from 'gestalt'

import GenericLayout from '../../components/GenericLayout'
import NoResults from '../../components/NoResults'

import PlayerCard from './PlayerCard'
import NewPlayerButton from './NewPlayerButton'

const PlayerManagement = ({
  players,
  refetchQuery,
}) => (
  <GenericLayout>

    <Heading>Players</Heading>

    <Box
      marginTop={8}
      column={12}
    >

      {players.length > 0 ? (
        players.map((player) => (
          <PlayerCard
            id={player.id}
            name={player.name}
            key={player.id}
            refetchQuery={refetchQuery}
          />
        ))
      ) : (
        <NoResults message="No Players available" />
      )}

    </Box>

    <NewPlayerButton
      refetchQuery={refetchQuery}
    />
  </GenericLayout>
)

PlayerManagement.propTypes = {
  refetchQuery: PropTypes.object.isRequired,
  players: PropTypes.array,
}

PlayerManagement.defaultProps = {
  players: [],
}

export default PlayerManagement
