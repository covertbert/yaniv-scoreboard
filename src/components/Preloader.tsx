import { Spinner } from 'gestalt'
import * as React from 'react'
import CenterWrapper from './CenterWrapper'

const Preloader: React.SFC = () => (
  <CenterWrapper>
    <Spinner
      show={true}
      accessibilityLabel="Loading spinner"
    />
  </CenterWrapper>
)

export default Preloader
