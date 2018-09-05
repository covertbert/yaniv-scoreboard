import { graphql, compose } from 'react-apollo'
import { setDisplayName, withHandlers, withProps } from 'recompose'
import { gql } from 'apollo-boost'

import ComponentLoader from '../../apollo/ComponentLoader'

import PlayerManagement from './PlayerManagement'

const createHandlers = {
  deletePlayer: () => () => {
    console.log('balls')
  },
}

const createProps = ({ data }) => ({
  players: data.players,
})

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
  graphql(query),
  ComponentLoader((props) => props.data.loading),
  withHandlers(createHandlers),
  withProps(createProps),
)(PlayerManagement)
