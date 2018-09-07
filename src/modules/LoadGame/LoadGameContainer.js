import { compose, setDisplayName } from 'recompose'

import LoadGame from './LoadGame'

export default compose(setDisplayName('LoadGameContainer'))(LoadGame)
