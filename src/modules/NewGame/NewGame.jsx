import React from 'react'
import { Heading, Box } from 'gestalt'

import GenericLayout from '../../components/GenericLayout'
import NoResults from '../../components/NoResults'
import NewPlayerButton from '../../components/NewPlayerButton'

type Props = {
  players: Array,
  refetchQuery: Object,
}

const NewGame = ({ players, refetchQuery }: Props) => (
  <GenericLayout>

    <Heading>New game</Heading>

    <Box
      marginTop={8}
      column={12}
    >

      {players.length > 0 ? (
        players.map((player) => (
          <p>{player.name}</p>
        ))
      ) : (
        <React.Fragment>
          <NoResults message="No Players available" />
        </React.Fragment>
      )}

      <NewPlayerButton
        refetchQuery={refetchQuery}
      />

    </Box>
  </GenericLayout>
)

export default NewGame
