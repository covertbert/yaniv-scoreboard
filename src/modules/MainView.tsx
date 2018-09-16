import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AppHeader from '../components/AppHeader'
import Routes from '../routes/Routes'

const MainView: React.SFC = () => (
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
