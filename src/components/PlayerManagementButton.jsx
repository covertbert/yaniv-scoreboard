import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'gestalt'

const ButtonWrapper = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

const PlayerManagementButton = () => (
  <ButtonWrapper>
    <Link to="/player-management">
      <Icon
        accessibilityLabel="Player Management"
        icon="people"
        iconColor="red"
        size="25px"
      />
    </Link>
  </ButtonWrapper>
)

export default PlayerManagementButton
