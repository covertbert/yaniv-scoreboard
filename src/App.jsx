import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import environment from './apollo/environment'
import reducers from './store/reducers'

import GlobalStyle from './styles/GlobalStyle'
import MainView from './modules/MainView'

const store = createStore(
  reducers,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const App = () => (
  <ApolloProvider client={environment}>
    <GlobalStyle />
    <Provider store={store}>
      <MainView />
    </Provider>
  </ApolloProvider>
)

export default App
