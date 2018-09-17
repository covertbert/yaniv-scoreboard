import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoadGame from '../modules/LoadGame'
import MainMenu from '../modules/MainMenu'
import NewGame from '../modules/NewGame'
import PlayerManagement from '../modules/PlayerManagement'

const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact={true}
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
