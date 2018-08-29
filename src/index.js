import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx' // eslint-disable-line
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root')) // eslint-disable-line
registerServiceWorker()
