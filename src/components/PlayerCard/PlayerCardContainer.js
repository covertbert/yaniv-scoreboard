import { connect } from 'react-redux'
import { compose, setDisplayName, withHandlers } from 'recompose'
import { gql } from 'apollo-boost'

import { withMutation, commitMutation } from '../../apollo'
import { currentGameAddPlayer, currentGameRemovePlayer } from '../../store/actions'

import PlayerCard from './PlayerCard'

const mutation = gql`
  mutation deletePlayerMutation($id: ID!) {
    deletePlayer(where: {
      id: $id
    }){
      id
    }
  }
`

const createHandlers = {
  deletePlayerMutation: ({ mutate, refetchQuery }) => (id) => {
    const variables = {
      id,
    }

    return commitMutation(variables, mutate, refetchQuery)
  },
}

const mapDispatchToProps = (dispatch) => ({
  addPlayerToGame: (player) => {
    dispatch(currentGameAddPlayer(player))
  },

  removePlayerFromGame: (id) => {
    dispatch(currentGameRemovePlayer(id))
  },
})

export {
  mutation,
  createHandlers,
}

export default compose(
  setDisplayName('PlayerCardContainer'),
  withMutation(mutation),
  withHandlers(createHandlers),
  connect(null, mapDispatchToProps),
)(PlayerCard)
