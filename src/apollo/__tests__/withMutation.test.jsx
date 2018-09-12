import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { gql } from 'apollo-boost'

import withMutation from '../withMutation'

describe('withMutation', () => {
  const MockComponent = () => (<div>chicken</div>)

  const mutation = gql`
    mutation testMutation($id: ID!) {
      mutate(data: {
        id: $id
      }) {
        id
      }
    }
  `

  const MockComponentWithMutation = compose(
    setDisplayName('MockComponentWithMutation'),
    withMutation(mutation),
  )(MockComponent)


  test('set the correct display name', () => {
    expect(MockComponentWithMutation.WrappedComponent.displayName)
      .toEqual('withProps(ComponentWithQuery)')
  })

  test('wraps the component with the mutation HOC', () => {
    expect(MockComponentWithMutation.WrappedComponent).toHaveLength(1)
  })
})

