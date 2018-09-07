import { compose, setDisplayName, withHandlers } from 'recompose'
import { gql } from 'apollo-boost'

import { withMutation, commitMutation } from '../../../apollo'

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
    commitMutation(mutate, { id }, refetchQuery).then((data) => {
      console.log(data)
    })
  },
}

export default compose(
  setDisplayName('PlayerCardContainer'),
  withMutation(mutation),
  withHandlers(createHandlers),
)(PlayerCard)
