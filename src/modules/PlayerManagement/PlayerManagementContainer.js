import { compose, setDisplayName, withProps } from 'recompose'
import { gql } from 'apollo-boost'

import { withQueryRenderer } from '../../apollo'

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

const createProps = {
  refetchQuery: query,
}

// const deletePlayerMutation = gql`
//   mutation deletePlayerMutation($id: ID!) {
//     deletePlayer(where: {
//       id: $id
//     }){
//       id
//     }
//   }
// `

// const createPlayerMutation = gql`
//   mutation createPlayerMutation($id: ID!) {
//     createPlayer(data: {
//       name: $name
//     }) {
//       id
//       name
//     }
//   }
// `

// const createHandlers = {
//   deletePlayerMutation: ({ mutate }) => (id) => {
//     commitMutation(mutate, { id }, query).then((data) => {
//       console.log(data)
//     })
//   },
// }

export default compose(
  setDisplayName('PlayerManagementContainer'),
  withQueryRenderer(query),
  withProps(createProps),
)(PlayerManagement)
