import React from 'react'

import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { mount } from 'enzyme'

const renderWithRouter = (
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => ({
  ...mount(<Router history={history}>{ui}</Router>),
  history,
})

export default renderWithRouter
