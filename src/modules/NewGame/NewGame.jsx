import React from 'react'
import { Heading, Box } from 'gestalt'

import GenericLayout from '../../components/GenericLayout'
import NoResults from '../../components/NoResults'
import NewPlayerButton from '../../components/NewPlayerButton'
import PlayerCard from '../../components/PlayerCard'

type Props = {
  playersInGame: Array,
  availablePlayers: Array,
  refetchQuery: Object,
}

const NewGame = ({ availablePlayers, playersInGame, refetchQuery }: Props) => (
  <GenericLayout>

    <Heading>New game</Heading>

    <Box
      marginTop={8}
      column={12}
    >

      <Heading size="xs">
        Players in game
      </Heading>

      <Box
        marginTop={8}
        column={12}
        data-testid="NewGame/players-in-game"
      >

        {playersInGame.length > 0 ? (
          playersInGame.map((player) => (
            <PlayerCard
              id={player.id}
              name={player.name}
              key={player.id}
              actionType="removeFromGame"
              refetchQuery={refetchQuery}
            />
          ))
        ) : (
          <React.Fragment>
            <NoResults message="No Players available" />
          </React.Fragment>
        )}
      </Box>
    </Box>

    <Box
      marginTop={8}
      column={12}
    >

      <Heading size="xs">
        Players available
      </Heading>

      <Box
        marginTop={8}
        column={12}
        data-testid="NewGame/available-players"
      >

        {availablePlayers.length > 0 ? (
          availablePlayers.map((player) => (
            <PlayerCard
              id={player.id}
              name={player.name}
              key={player.id}
              actionType="addToGame"
              refetchQuery={refetchQuery}
            />
          ))
        ) : (
          <React.Fragment>
            <NoResults message="No Players available" />
          </React.Fragment>
        )}
      </Box>

      <NewPlayerButton
        refetchQuery={refetchQuery}
      />

    </Box>
  </GenericLayout>
)

export default NewGame
