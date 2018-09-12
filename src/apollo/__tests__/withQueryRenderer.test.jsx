import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { gql } from 'apollo-boost'
import { render } from 'react-testing-library'

import withQueryRenderer, { ComponentLoader } from '../withQueryRenderer'

const MockComponent = render(<div>chicken</div>)

describe('withQueryRenderer', () => {
  const query = gql`
    query {
      test
    }
  `

  const MockComponentWithQueryRenderer = compose(
    setDisplayName('MockComponentWithQueryRenderer'),
    withQueryRenderer(query),
  )(MockComponent)

  test('set the correct display name for the root component', () => {
    expect(MockComponentWithQueryRenderer.displayName)
      .toEqual('MockComponentWithQueryRenderer')
  })

  test('set the correct display name for the wrapped component', () => {
    expect(MockComponentWithQueryRenderer.WrappedComponent.displayName)
      .toEqual('branch(withProps(ComponentWithQuery))')
  })

  test('wraps the component with the mutation HOC', () => {
    expect(MockComponentWithQueryRenderer.WrappedComponent).toHaveLength(1)
  })
})

describe('ComponentLoader', () => {
  test('displays the preloader when passed truthy value', () => {
    const LoaderWrapped = ComponentLoader(true)(MockComponent)
    expect(LoaderWrapped.displayName).toEqual('branch(Component)')
  })
})

