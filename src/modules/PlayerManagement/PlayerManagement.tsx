import { Box, Heading } from 'gestalt'
import * as React from 'react'

import GenericLayout from '../../components/GenericLayout'
import NoResults from '../../components/NoResults'

import NewPlayerButton from './NewPlayerButton'
import PlayerCard from './PlayerCard'

interface IPlayer {
  id: string
  name: string
}
interface IProps {
  refetchQuery: object,
  players: IPlayer[],
}

const PlayerManagement: React.SFC<IProps> = ({
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

// PlayerManagement.defaultProps = {
//   players: [],
// }

// TODO Fix default props

export default PlayerManagement
