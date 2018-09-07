import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainMenu from '../modules/MainMenu'
import PlayerManagement from '../modules/PlayerManagement'
import NewGame from '../modules/NewGame'
import LoadGame from '../modules/LoadGame'

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
    <Route
      path="/new-game"
      component={NewGame}
    />
    <Route
      path="/load-game"
      component={LoadGame}
    />
  </Switch>
)

export default Routes
