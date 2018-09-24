import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AppHeader from '../AppHeader'

describe('AppHeader', () => {
  it('renders the AppHeader', () => {
    const { wrapper } = shallow(<AppHeader />)
    console.log(wrapper.debug())


    // expect(wrapper).toContain('AppHeader/PlayerManagementButton')
    // expect(wrapper).toContain('AppHeader/HomeButton')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
