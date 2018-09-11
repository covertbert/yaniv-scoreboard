import React from 'react'
import { render } from 'react-testing-library'
import NewPlayerButton from '../NewPlayerButton'

describe('NewPlayerButton', () => {
  it('renders the NewPlayerButton', () => {
    const props = {
      createPlayerMutation: jest.fn(),
    }

    const { container } = render(<NewPlayerButton {...props} />)

    expect(container.innerHTML).toContain('Add Player')
  })
})
