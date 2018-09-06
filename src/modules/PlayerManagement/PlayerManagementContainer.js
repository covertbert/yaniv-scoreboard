import { compose, setDisplayName, withHandlers } from 'recompose'
import { gql } from 'apollo-boost'

import withQueryRenderer from '../../hoc/withQueryRenderer'
import PlayerManagement from './PlayerManagement'

const createHandlers = {
  deletePlayer: () => () => {
    console.log('balls')
  },
}
const query = gql`
  {
    players {
      id
      name
      createdAt
    }
  }
`

export default compose(
  setDisplayName('PlayerManagementContainer'),
  withQueryRenderer(query),
  withHandlers(createHandlers),
)(PlayerManagement)
