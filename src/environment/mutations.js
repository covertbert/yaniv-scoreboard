import { curry } from 'ramda'
import { commitMutation } from 'react-relay'
import environment from './index'

const commitAsyncMutation = (config) => (
  new Promise((resolve, reject) => {
    const onCompleted = config.onCompleted ? curry(config.onCompleted)(resolve) : resolve
    const onError = config.onError ? curry(config.onError)(reject) : reject

    commitMutation(
      environment,
      {
        ...config,
        onCompleted,
        onError,
      },
    )
  })
)

export {
  commitAsyncMutation,
}
