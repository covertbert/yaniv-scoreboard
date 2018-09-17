import * as React from 'react'

interface IProps {
  foo: string
  bar: string
  handlerYeah: any
}

const TestComponent: React.SFC<IProps> = ({ foo, bar }) => (
  <div>
    <p>{foo}</p>
    <p>{bar}</p>
  </div>
)

export default TestComponent
