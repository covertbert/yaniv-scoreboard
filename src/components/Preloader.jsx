import React from 'react'
import { Spinner } from 'gestalt'
import CenterWrapper from './CenterWrapper'

const Preloader = () => (
  <CenterWrapper>
    <Spinner show accessibilityLabel="Loading spinner" />
  </CenterWrapper>
)

export default Preloader
