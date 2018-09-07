import React from 'react'
import renderWithRouter from '../../utils/test/renderWithRouter'
import MainMenu from '../MainMenu'

describe('MainMenu', () => {
  it('renders the MainMenu', () => {
    const { container } = renderWithRouter(<MainMenu />)

    expect(container.innerHTML).toContain('New game')
    expect(container.innerHTML).toContain('Load Game')
  })
})
