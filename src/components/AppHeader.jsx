import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'gestalt'

const AppHeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const AppHeader = () => (
  <AppHeaderWrapper>
    <Link
      to="/"
      data-test-id="AppHeader/HomeButton"
    >
      <Icon
        accessibilityLabel="Home"
        icon="view-type-dense"
        size="25px"
      />
    </Link>

    <Link
      to="/player-management"
      data-test-id="AppHeader/PlayerManagementButton"
    >
      <Icon
        accessibilityLabel="Player Management"
        icon="people"
        size="25px"
      />
    </Link>
  </AppHeaderWrapper>
)

export default AppHeader
