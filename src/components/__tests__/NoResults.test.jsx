import React from 'react'
import { render } from 'react-testing-library'
import NoResults from '../NoResults'

describe('NoResults', () => {
  it('renders the NoResults', () => {
    const props = {
      message: 'No gosh darned results',
    }

    const { container } = render(<NoResults {...props} />)

    expect(container.innerHTML).toContain(props.message)
  })
})
