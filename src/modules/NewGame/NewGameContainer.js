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

const createProps = {
  refetchQuery: query,
}

const mapStateToProps = (state) => {
  console.log(getPlayersInGame(state))

  return {
    playersInGame: getPlayersInGame(state),
  }
}

export default compose(
  setDisplayName('NewGameContainer'),
  withQueryRenderer(query),
  withProps(createProps),
  connect(mapStateToProps),
)(NewGame)
