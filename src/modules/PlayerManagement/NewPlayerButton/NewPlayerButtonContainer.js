import { compose, setDisplayName, withHandlers } from 'recompose'
import { gql } from 'apollo-boost'

import { withMutation, commitMutation } from '../../../apollo'

import NewPlayerButton from './NewPlayerButton'

const mutation = gql`
  mutation createPlayerMutation($name: String!) {
    createPlayer(data: {
      name: $name
    }) {
      id
      name
    }
  }
`
const createHandlers = {
  createPlayerMutation: ({ mutate, refetchQuery }) => (name) => {
    const variables = {
      name,
    }

    return commitMutation(variables, mutate, refetchQuery)
  },
}

export {
  createHandlers,
  mutation,
}

export default compose(
  setDisplayName('NewPlayerButtonContainer'),
  withMutation(mutation),
  withHandlers(createHandlers),
)(NewPlayerButton)
