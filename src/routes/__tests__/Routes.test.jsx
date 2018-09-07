import React from 'react'

import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { render, fireEvent } from 'react-testing-library'

import Routes from '../Routes'

const renderWithRouter = (
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => ({
  ...render(<Router history={history}>{ui}</Router>),
  history,
})


describe('Routes', () => {
  it('loads the index page', () => {
    const { container, getByTestId } = renderWithRouter(<Routes />)
    expect(container.innerHTML).toMatch('New Game')
    const leftClick = { button: 0 }
    fireEvent.click(getByTestId('AppHeader/PlayerManagementButton'), leftClick)
    // // normally I'd use a data-testid, but just wanted to show this is also possible
    // expect(container.innerHTML).toMatch('You are on the about page')
  })
})
