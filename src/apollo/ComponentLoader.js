import { branch, renderComponent } from 'recompose'

import Preloader from '../components/Preloader'

export default (loading) => branch(loading, renderComponent(Preloader))
