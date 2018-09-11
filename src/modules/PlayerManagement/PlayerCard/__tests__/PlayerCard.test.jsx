import React from 'react'
import { render } from 'react-testing-library'
import PlayerCard from '../PlayerCard'

describe('PlayerCard', () => {
  it('renders the PlayerCard', () => {
    const props = {
      id: 'what-about-pigs',
      name: 'Piggy McPig',
      deletePlayerMutation: jest.fn(),
    }

    const { container } = render(<PlayerCard {...props} />)

    expect(container.innerHTML).toContain('Delete player')
  })
})
