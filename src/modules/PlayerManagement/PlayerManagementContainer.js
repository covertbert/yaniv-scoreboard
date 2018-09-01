import { compose, setDisplayName, withHandlers } from 'recompose'
import { graphql } from 'react-relay'

import environment from '../../environment'
import { createQueryRenderer } from '../../relay'

import PlayerManagement from './PlayerManagement'

const createHandlers = {
  deletePlayer: () => () => {
    console.log('balls')
  },
}

const withQueryRenderer = createQueryRenderer(
  environment,
  graphql`
   query PlayerManagementContainer_Query {
      players {
        id
        name
        createdAt
      }
    }
  `,
)


export default compose(
  setDisplayName('PlayerManagementContainer'),
  withQueryRenderer,
  withHandlers(createHandlers),
)(PlayerManagement)
