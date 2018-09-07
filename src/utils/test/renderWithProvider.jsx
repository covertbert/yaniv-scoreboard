import React from 'react'
import { render } from 'react-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'

const renderWithProvider = (
  ui,
  { mocks = {} } = {},
) => ({
  ...render(<MockedProvider history={mocks}>{ui}</MockedProvider>),
  mocks,
})

export default renderWithProvider
