import React from 'react'
import renderWithProvider from '../../../utils/test/renderWithProvider'

import NewGame from '../NewGame'

jest.mock('../../../components/PlayerCard', () => () => (
  <div id="playerCard">
    Player
  </div>
))

describe('NewGame', () => {
  test('it should show available players when players are available', () => {
    const props = {
      playersInGame: [],
      availablePlayers: [
        {
          name: 'Bill',
          id: 'bill',
        },
        {
          name: 'Henry',
          id: 'henry',
        },
      ],
      refetchQuery: {},
    }
    const { getByTestId } = renderWithProvider(<NewGame {...props} />)

    expect(getByTestId('NewGame/available-players').children).toHaveLength(2)
  })

  test('it should show players in game when players are in the game', () => {
    const props = {
      playersInGame: [
        {
          name: 'Bill',
          id: 'bill',
        },
        {
          name: 'Henry',
          id: 'henry',
        },
      ],
      availablePlayers: [],
      refetchQuery: {},
    }
    const { getByTestId } = renderWithProvider(<NewGame {...props} />)

    expect(getByTestId('NewGame/players-in-game').children).toHaveLength(2)
  })
})
