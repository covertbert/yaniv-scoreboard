import { createFragmentContainer } from 'react-relay'

export default function withFragmentContainer(fragmentSpec) {
  return (ComposedComponent) => createFragmentContainer(ComposedComponent, fragmentSpec)
}
