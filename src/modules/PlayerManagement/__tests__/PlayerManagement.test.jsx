import React from 'react'

import PlayerManagement from '../PlayerManagement'

import renderWithProvider from '../../../utils/test/renderWithProvider'

jest.mock('../../../components/PlayerCard', () => () => (
  <div id="playerCard">
    Player
  </div>
))

describe('PlayerManagement', () => {
  it('renders the PlayerManagement', () => {
    const props = {
      refetchQuery: {},
      players: [
        {
          id: 'tom-id',
          name: 'Tom',
          createdAt: '2018-09-07T15:33:08.392Z',
        },
        {
          id: 'dick-id',
          name: 'Dick',
          createdAt: '2018-09-07T15:33:08.392Z',
        },
        {
          id: 'harry-id',
          name: 'Harry',
          createdAt: '2018-09-07T15:33:08.392Z',
        },
      ],
    }

    const { getByTestId } = renderWithProvider(<PlayerManagement {...props} />)

    expect(getByTestId('PlayerManagement/players').children).toHaveLength(3)
  })
})
