import React from 'react'
import { render } from 'react-testing-library'
import Preloader from '../Preloader'

describe('Preloader', () => {
  it('renders the Preloader', () => {
    const { container } = render(<Preloader />)

    expect(container.innerHTML).toContain('Loading spinner')
  })
})
