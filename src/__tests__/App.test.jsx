import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import App from '../App'

describe('App', () => {
  it('renders the App', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('ApolloProvider').exists()).toEqual(true)
    expect(wrapper.find('GlobalStyleComponent').exists()).toEqual(true)
    expect(wrapper.find('MainView').exists()).toEqual(true)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
