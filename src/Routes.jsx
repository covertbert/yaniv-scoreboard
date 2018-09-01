import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainMenu from './modules/MainMenu'
import PlayerManagement from './modules/PlayerManagement'

const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={MainMenu}
    />
    <Route
      path="/player-management"
      component={PlayerManagement}
    />
  </Switch>
)

export default Routes
