import { compose, setDisplayName } from 'recompose'
import { graphql } from 'react-relay'

import environment from '../../environment'
import { createQueryRenderer } from '../../relay'

import PlayerManagement from './PlayerManagement'

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
)(PlayerManagement)
