import React from 'react'

import { fireEvent } from 'react-testing-library'

import PlayerCard from '../PlayerCard'
import { mutation } from '../PlayerCardContainer'

import renderWithProvider from '../../../utils/test/renderWithProvider'

const mocks = [
  {
    request: {
      mutation,
    },
  },
]

describe('PlayerCard', () => {
  it('renders the delete button when actions is delete', () => {
    const props = {
      id: 'chicken',
      name: 'Chicken',
      deletePlayerMutation: jest.fn(),
      actionType: 'delete',
    }

    const { container } = renderWithProvider(<PlayerCard {...props} />, mocks)

    expect(container.innerHTML).toContain('Chicken')
    expect(container.innerHTML).toContain('Delete player')
  })

  it('renders the add to game button when action is addToGame', () => {
    const props = {
      id: 'chicken',
      name: 'Chicken',
      deletePlayerMutation: jest.fn(),
      actionType: 'addToGame',
    }

    const { container } = renderWithProvider(<PlayerCard {...props} />, mocks)

    expect(container.innerHTML).toContain('Chicken')
    expect(container.innerHTML).toContain('Add')
  })

  it('renders the remove from game button when actions is removeFromGame', () => {
    const props = {
      id: 'chicken',
      name: 'Chicken',
      deletePlayerMutation: jest.fn(),
      actionType: 'removeFromGame',
    }

    const { container } = renderWithProvider(<PlayerCard {...props} />, mocks)

    expect(container.innerHTML).toContain('Chicken')
    expect(container.innerHTML).toContain('Remove')
  })

  it('fires deletePlayerMutation event when delete button is clicked', () => {
    const props = {
      id: 'chicken',
      name: 'Chicken',
      deletePlayerMutation: jest.fn(),
      actionType: 'delete',
    }

    const { getByText } = renderWithProvider(<PlayerCard {...props} />, mocks)

    const leftClick = { button: 0 }
    fireEvent.click(getByText('Delete'), leftClick)
    expect(props.deletePlayerMutation).toBeCalled()
  })
})
