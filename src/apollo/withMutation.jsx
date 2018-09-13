import React, { Fragment } from 'react'
import { setDisplayName, withProps } from 'recompose'
import { graphql, compose } from 'react-apollo'

const withMutation = (mutation: Object) => (ComposedComponent: Function) => {
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
    setDisplayName(`withMutation(${wrappedComponentName})`),
    graphql(mutation),
    withProps(createProps),
  )(ComponentWithQuery)
}

export default withMutation
