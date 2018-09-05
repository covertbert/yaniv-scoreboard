import { graphql, compose } from 'react-apollo'
import { setDisplayName, withHandlers } from 'recompose'
import { gql } from 'apollo-boost'

import ComponentLoader from '../../apollo/ComponentLoader'

import PlayerManagement from './PlayerManagement'

const createHandlers = {
  deletePlayer: () => () => {
    console.log('balls')
  },
}

const colorsQuery = gql`
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
  graphql(colorsQuery),
  ComponentLoader((props) => props.data.loading),
  withHandlers(createHandlers),
)(PlayerManagement)
