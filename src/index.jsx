import React from 'react'
import ReactDOM from 'react-dom'
import 'gestalt/dist/gestalt.css'
import './app.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
