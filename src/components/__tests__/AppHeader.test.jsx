import React from 'react'
import renderWithRouter from '../../utils/test/renderWithRouter'
import AppHeader from '../AppHeader'

describe('AppHeader', () => {
  it('renders the AppHeader', () => {
    const { container } = renderWithRouter(<AppHeader />)

    expect(container.innerHTML).toContain('AppHeader/PlayerManagementButton')
    expect(container.innerHTML).toContain('AppHeader/HomeButton')
  })
})
