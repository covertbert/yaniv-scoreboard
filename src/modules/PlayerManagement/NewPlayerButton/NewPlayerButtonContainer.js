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
    commitMutation(mutate, { name }, refetchQuery).then((data) => {
      console.log(data)
    })
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
