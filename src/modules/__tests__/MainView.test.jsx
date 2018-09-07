import React from 'react'
import { render } from 'react-testing-library'
import MainView from '../MainView'

describe('MainView', () => {
  it('renders the MainView', () => {
    const { container } = render(<MainView />)
    console.log(container.innerHTML)

    expect(container.innerHTML).toContain('<header')
    expect(container.innerHTML).toContain('<main')
  })
})
