import { connect } from 'react-redux'
import { compose, setDisplayName, withProps } from 'recompose'
import { gql } from 'apollo-boost'

import { withQueryRenderer } from '../../apollo'
import { getPlayersInGame } from '../../store/selectors'

import NewGame from './NewGame'

const query = gql`
  {
    players {
      id
      name
    }
  }
`

const getAvailablePlayers = (players, playersInGame) => {
  const playersInGameIDs = playersInGame.map((playerInGame) => playerInGame.id)
  return players.filter((player) => !playersInGameIDs.includes(player.id))
}

const createProps = ({ players, playersInGame }) => ({
  refetchQuery: query,
  availablePlayers: getAvailablePlayers(players, playersInGame),
})

const mapStateToProps = (state) => ({
  playersInGame: getPlayersInGame(state),
})

export default compose(
  setDisplayName('NewGameContainer'),
  withQueryRenderer(query),
  connect(mapStateToProps),
  withProps(createProps),
)(NewGame)
