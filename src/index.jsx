import React from 'react'
import ReactDOM from 'react-dom'

import 'gestalt/dist/gestalt.css'

import App from './App'
import registerServiceWorker from './service-workers/registerServiceWorker'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(<App />, root)
}

registerServiceWorker()
