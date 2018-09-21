import React from 'react'
import { Box, Heading } from 'gestalt'

import GenericLayout from '../../components/GenericLayout'
import NoResults from '../../components/NoResults'

import PlayerCard from './PlayerCard'
import NewPlayerButton from '../../components/NewPlayerButton'

type Props = {
  players: Object,
  refetchQuery: Function,
};

const PlayerManagement = ({ refetchQuery, players }: Props) => (
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

export default PlayerManagement
