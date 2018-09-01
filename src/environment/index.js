import { Environment, Network, RecordSource, Store } from 'relay-runtime' // eslint-disable-line

require('dotenv').config()

function fetchQuery(operation, variables) {
  return fetch('http://localhost:4466/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: operation.text, variables }),
  }).then((response) => response.json())
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

export default new Environment({ network, store })
