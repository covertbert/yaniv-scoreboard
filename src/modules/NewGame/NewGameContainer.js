import { compose, setDisplayName } from 'recompose'

import NewGame from './NewGame'

export default compose(setDisplayName('NewGameContainer'))(NewGame)
