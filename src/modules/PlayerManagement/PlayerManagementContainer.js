import { compose, setDisplayName, withHandlers } from 'recompose'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

import withQueryRenderer from '../../hoc/withQueryRenderer'
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
  deletePlayerMutation: ({ mutate }) => (id) => mutate({
    variables: {
      id,
    },
    refetchQueries: [{
      query,
    }],
  }).then((data) => {
    console.log(data, 'Return value')
  }).catch((e) => {
    console.error(e, 'Error')
  }),
}

export default compose(
  setDisplayName('PlayerManagementContainer'),
  withQueryRenderer(query),
  graphql(mutation),
  withHandlers(createHandlers),
)(PlayerManagement)
