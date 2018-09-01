import React from 'react'

import { Link } from 'react-router-dom'

const MainMenu = () => (
  <ul>
    <li>
      <Link to="/player-management">
        Player Management
      </Link>
    </li>
  </ul>
)

export default MainMenu
