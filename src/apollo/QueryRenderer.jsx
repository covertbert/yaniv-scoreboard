import React, { Fragment } from 'react'
import { setDisplayName } from 'recompose'
import { graphql, compose } from 'react-apollo'
import ComponentLoader from './ComponentLoader'

// const createProps = ({ data }) => ({
//   players: data.players,
// })


const WithQueryRenderer = (query) => (ComposedComponent) => {
  const wrappedComponentName = ComposedComponent.displayName || ComposedComponent.name || 'Component'

  const ComponentWithQuery = (props) => (
    <Fragment>
      <ComposedComponent
        {...props}
      />
    </Fragment>
  )

  return compose(
    setDisplayName(`withQueryRenderer(${wrappedComponentName})`),
    graphql(query),
    ComponentLoader((props) => props.data.loading),
  )(ComponentWithQuery)
}

export default WithQueryRenderer
