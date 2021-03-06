import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from '../routes/Routes'
import AppHeader from '../components/AppHeader'

const MainView = () => (
  <Router>
    <React.Fragment>
      <AppHeader />
      <main>
        <Routes />
      </main>
    </React.Fragment>
  </Router>
)

export default MainView
