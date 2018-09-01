import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from '../../Routes'
import AppHeader from '../../components/AppHeader'

const MainView = () => (
  <Router>
    <React.Fragment>
      <AppHeader />
      <Routes />
    </React.Fragment>
  </Router>
)

export default MainView
