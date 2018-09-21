import React from 'react'

import { fireEvent } from 'react-testing-library'

import NewPlayerButton from '../NewPlayerButton'
import { mutation } from '../NewPlayerButtonContainer'

import renderWithProvider from '../../../utils/test/renderWithProvider'

const mocks = [
  {
    request: {
      mutation,
    },
  },
]

describe('NewPlayerButton', () => {
  it('renders correctly', () => {
    const props = {
      createPlayerMutation: jest.fn(),
    }

    const { container } = renderWithProvider(<NewPlayerButton {...props} />, mocks)

    expect(container.innerHTML).toContain('Add player')
  })

  it('fires createPlayerMutation event when add player button is clicked', () => {
    const props = {
      createPlayerMutation: jest.fn(),
    }

    const { getByText } = renderWithProvider(<NewPlayerButton {...props} />, mocks)

    const leftClick = { button: 0 }
    fireEvent.click(getByText('Add player'), leftClick)
    expect(props.createPlayerMutation).toBeCalled()
  })
})
