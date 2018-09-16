import { Spinner } from 'gestalt'
import { SFC } from 'react'
import * as React from 'react'
import CenterWrapper from './CenterWrapper'

const Preloader: SFC = () => (
  <CenterWrapper>
    <Spinner
      show={true}
      accessibilityLabel="Loading spinner"
    />
  </CenterWrapper>
)

export default Preloader
