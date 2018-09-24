import React from 'react'
import { shallow } from 'enzyme'
import NoResults from '../NoResults'

describe('NoResults', () => {
  it('renders the NoResults', () => {
    const props = {
      message: 'No gosh darned results',
    }

    const { container } = shallow(<NoResults {...props} />)

    expect(container).toContain(props.message)
  })
})
