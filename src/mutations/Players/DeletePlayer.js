import { graphql } from 'react-relay'

import { commitAsyncMutation } from '../../environment/mutations'

const mutation = graphql`
  mutation DeletePlayer_Mutation($input: ID!) {
    deletePlayer(where: {
      id: $input
    }) {
      id
    }
  }
`

const DeletePlayer = ({ id }) => {
  const variables = {
    input: {
      id,
    },
  }

  return commitAsyncMutation({
    mutation,
    variables,
  })
}

export default DeletePlayer
