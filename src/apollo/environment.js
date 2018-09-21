import ApolloClient from 'apollo-boost'

const environment = new ApolloClient({
  uri: 'http://localhost:3000/',
})

export default environment
