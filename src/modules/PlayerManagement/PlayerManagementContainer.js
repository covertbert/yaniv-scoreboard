import { compose, setDisplayName, withHandlers } from 'recompose'
import { gql } from 'apollo-boost'

import { withQueryRenderer, withMutations, commitMutation } from '../../apollo'

import PlayerManagement from './PlayerManagement'

const query = gql`
  {
    players {
      id
      name
      createdAt
    }
  }
`

const mutations = gql`
  mutation deletePlayerMutation($id: ID!) {
    deletePlayer(where: {
      id: $id
    }){
      id
    }
  }
`

const createHandlers = {
  deletePlayerMutation: ({ mutate }) => (id) => {
    commitMutation(mutate, { id }, query).then((data) => {
      console.log(data)
    })
  },
}

export default compose(
  setDisplayName('PlayerManagementContainer'),
  withQueryRenderer(query),
  withMutations(mutations),
  withHandlers(createHandlers),
)(PlayerManagement)
