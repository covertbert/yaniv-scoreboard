import React from 'react'

import PlayerManagement from '../PlayerManagement'
import { query } from '../PlayerManagementContainer'

import renderWithProvider from '../../../utils/test/renderWithProvider'

const mocks = [
  {
    request: {
      query,
    },
  },
]

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

    const { container } = renderWithProvider(<PlayerManagement {...props} />, mocks)

    expect(container.innerHTML).toContain('Tom')
    expect(container.innerHTML).toContain('Dick')
    expect(container.innerHTML).toContain('Harry')
  })
})
