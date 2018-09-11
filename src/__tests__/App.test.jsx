import React from 'react'

import App from '../App'

import renderWithProvider from '../utils/test/renderWithProvider'

describe('App', () => {
  it('renders the App', () => {
    const { container } = renderWithProvider(<App />)

    expect(container.innerHTML).toContain('<title>Home</title>')
    expect(container.innerHTML).toContain('<title>Player Management</title>')
    expect(container.innerHTML).toContain('AppHeader/PlayerManagementButton')
    expect(container.innerHTML).toContain('AppHeader/HomeButton')
    expect(container.innerHTML).toContain('Load game')
    expect(container.innerHTML).toContain('New game')
  })
})
