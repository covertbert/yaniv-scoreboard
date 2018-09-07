import ApolloClient from 'apollo-boost'

const environment = new ApolloClient({
  uri: 'http://localhost:4466/',
})

export default environment
