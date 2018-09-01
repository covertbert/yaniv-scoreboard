import { compose, setDisplayName } from 'recompose'

import MainView from './MainView'

export default compose(setDisplayName('MainViewContainer'))(MainView)
