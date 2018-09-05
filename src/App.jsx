import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import MainView from './modules/MainView'

const client = new ApolloClient({
  uri: 'http://localhost:4466/',
})


const App = () => (
  <ApolloProvider client={client}>
    <MainView />
  </ApolloProvider>
)

export default App
