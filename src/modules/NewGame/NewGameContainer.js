import { compose, setDisplayName, withProps } from 'recompose'
import { gql } from 'apollo-boost'

import { withQueryRenderer } from '../../apollo'

import NewGame from './NewGame'

const query = gql`
  {
    players {
      id
      name
    }
  }
`

const createProps = {
  refetchQuery: query,
}

export default compose(
  setDisplayName('NewGameContainer'),
  withQueryRenderer(query),
  withProps(createProps),
)(NewGame)
