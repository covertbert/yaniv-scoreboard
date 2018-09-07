import React, { Fragment } from 'react'
import { setDisplayName, withProps } from 'recompose'
import { graphql, compose } from 'react-apollo'

const withMutations = (mutations) => (ComposedComponent) => {
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
    setDisplayName(`withMutations(${wrappedComponentName})`),
    graphql(mutations),
    withProps(createProps),
  )(ComponentWithQuery)
}

export default withMutations
