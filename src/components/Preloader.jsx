import React from 'react'
import { Spinner } from 'gestalt'
import styled from 'styled-components'

const PreloaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Preloader = () => (
  <PreloaderWrapper>
    <Spinner show accessibilityLabel="Example spinner" />
  </PreloaderWrapper>
)

export default Preloader
