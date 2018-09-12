import React, { Fragment } from 'react'
import { setDisplayName, withProps, branch, renderComponent } from 'recompose'
import { graphql, compose } from 'react-apollo'

import Preloader from '../components/Preloader'

const ComponentLoader = (loading) => branch(loading, renderComponent(Preloader))

const withQueryRenderer = (query) => (ComposedComponent) => {
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

export {
  ComponentLoader,
}

export default withQueryRenderer
