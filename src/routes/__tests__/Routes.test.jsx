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
    const { container } = renderWithRouter(<Routes />)

    expect(container.innerHTML).toMatch('New game')
    expect(container.innerHTML).toMatch('Load game')
  })

  it('loads the New Game page when link is clicked', () => {
    const { container, getByText } = renderWithRouter(<Routes />)

    const leftClick = { button: 0 }
    fireEvent.click(getByText('New game'), leftClick)

    expect(container.innerHTML).toMatch('New Game')
  })

  it('loads the Load Game page when link is clicked', () => {
    const { container, getByText } = renderWithRouter(<Routes />)

    const leftClick = { button: 0 }
    fireEvent.click(getByText('Load game'), leftClick)

    expect(container.innerHTML).toMatch('Load Game')
  })
})
