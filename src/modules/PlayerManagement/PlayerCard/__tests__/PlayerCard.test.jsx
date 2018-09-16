import React from 'react'

import { fireEvent } from 'react-testing-library'

import PlayerCard from '../PlayerCard'
import { mutation } from '../PlayerCardContainer'

import renderWithProvider from '../../../../utils/test/renderWithProvider'

const mocks = [
  {
    request: {
      mutation,
    },
  },
]

describe('PlayerCard', () => {
  it('renders correctly', () => {
    const props = {
      deletePlayerMutation: jest.fn(),
      id: 'chicken',
      name: 'Chicken',
    }

    const { container } = renderWithProvider(<PlayerCard {...props} />, mocks)

    expect(container.innerHTML).toContain('Chicken')
    expect(container.innerHTML).toContain('Delete player')
  })

  it('fires deletePlayerMutation event when delete button is clicked', () => {
    const props = {
      deletePlayerMutation: jest.fn(),
      id: 'chicken',
      name: 'Chicken',
    }

    const { getByText } = renderWithProvider(<PlayerCard {...props} />, mocks)

    const leftClick = { button: 0 }
    fireEvent.click(getByText('Delete'), leftClick)
    expect(props.deletePlayerMutation).toBeCalled()
  })
})
