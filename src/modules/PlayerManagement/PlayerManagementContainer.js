import { compose, setDisplayName } from 'recompose'

import PlayerManagement from './PlayerManagement'

export default compose(setDisplayName('PlayerManagementContainer'))(PlayerManagement)
