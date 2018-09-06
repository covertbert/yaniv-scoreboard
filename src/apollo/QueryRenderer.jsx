import React, { Fragment } from 'react'
import { setDisplayName, withProps } from 'recompose'
import { graphql, compose } from 'react-apollo'
import ComponentLoader from './ComponentLoader'

const WithQueryRenderer = (query) => (ComposedComponent) => {
  const wrappedComponentName = ComposedComponent.displayName || ComposedComponent.name || 'Component'

  const createProps = ({ data }) => data

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
    withProps(createProps),
  )(ComponentWithQuery)
}

export default WithQueryRenderer
