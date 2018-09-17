import { gql } from 'apollo-boost'
import { compose, setDisplayName, withProps } from 'recompose'

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

export {
  query,
}

export default compose(
  setDisplayName('PlayerManagementContainer'),
  withQueryRenderer(query),
  withProps(createProps),
)(PlayerManagement)
