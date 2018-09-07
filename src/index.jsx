import React from 'react'
import ReactDOM from 'react-dom'

import 'gestalt/dist/gestalt.css'

import App from './App'
import registerServiceWorker from './service-workers/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
