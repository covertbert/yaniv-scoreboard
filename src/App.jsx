import React from 'react'
import { ApolloProvider } from 'react-apollo'

import GlobalStyle from './styles/GlobalStyle'
import environment from './apollo/environment'

import MainView from './modules/MainView'

const App = () => (
  <ApolloProvider client={environment}>
    <GlobalStyle />
    <MainView />
  </ApolloProvider>
)

export default App
