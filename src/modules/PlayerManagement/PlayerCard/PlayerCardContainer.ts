import { gql } from 'apollo-boost'
import { compose, setDisplayName, withHandlers } from 'recompose'

import { commitMutation, withMutation } from '../../../apollo'

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

interface IDeletePlayerMutation {
  mutate: void
  refetchQuery: object
}

const createHandlers = {
  deletePlayerMutation: ({ mutate, refetchQuery } : IDeletePlayerMutation) => (id: string) => {
    const variables = {
      id,
    }

    return commitMutation(variables, mutate, refetchQuery)
  },
}

export {
  mutation,
  createHandlers,
}

export default compose(
  setDisplayName('PlayerCardContainer'),
  withMutation(mutation),
  withHandlers(createHandlers),
)(PlayerCard)
