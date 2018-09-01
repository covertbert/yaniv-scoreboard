import { graphql } from 'react-relay'
import { compose, setDisplayName } from 'recompose'

import environment from '../../environment'
import { createQueryRenderer } from '../../relay'

import MainView from './MainView'

const withQueryRenderer = createQueryRenderer(
  environment,
  graphql`
   query MainViewContainer_Query {
    users {
      name
      id
    }
  }
  `,
)

export default compose(
  setDisplayName('MainViewContainer'),
  withQueryRenderer,
)(MainView)
