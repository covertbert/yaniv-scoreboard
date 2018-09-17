import { withHandlers, withProps } from 'recompose'

import TestComponent from './TestComponent'

const props = {
  foo: 'stringy string string',
}

const handlers = {
  handlerYeah: (stuff: object) => (name: string) => {
    return { stuff, name }
  },
}

export default
withProps(props)(
  withHandlers(handlers)(TestComponent),
)
