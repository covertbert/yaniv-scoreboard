import React from 'react'
import { QueryRenderer } from 'react-relay'
import Preloader from '../components/Preloader'

const createQueryRenderer = (environment, query, mapPropsToVariables) => (ComposedComponent) => {
  const displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component'

  const getQueryVariables = typeof mapPropsToVariables === 'function'
    ? (props) => mapPropsToVariables(props)
    : () => mapPropsToVariables

  const QueryRendererWrapper = (props) => (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={getQueryVariables(props)}
      render={({ error, props: renderProps }) => {
        if (error) {
          throw error
        }

        if (!renderProps) {
          return <Preloader />
        }

        return (
          <ComposedComponent {...renderProps} {...props} />
        )
      }}
    />
  )

  QueryRendererWrapper.displayName = `QueryRendererWrapper(${displayName})`

  return QueryRendererWrapper
}

export default createQueryRenderer
