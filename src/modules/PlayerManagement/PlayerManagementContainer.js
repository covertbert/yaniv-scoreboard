import { compose, setDisplayName, withHandlers, withProps } from 'recompose'
import { gql } from 'apollo-boost'
import WithQueryRenderer from '../../apollo/QueryRenderer'

import PlayerManagement from './PlayerManagement'

const createProps = ({ data }) => ({
  players: data.players,
})

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
  WithQueryRenderer(query),
  withHandlers(createHandlers),
  withProps(createProps),
)(PlayerManagement)
