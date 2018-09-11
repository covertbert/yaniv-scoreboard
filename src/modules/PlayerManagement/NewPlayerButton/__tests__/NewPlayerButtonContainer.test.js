import { createHandlers } from '../NewPlayerButtonContainer'

describe('createHandlers', () => {
  test('it calls the commitMutation function', () => {
    const spy = jest.spyOn(createHandlers.createPlayerMutation, 'commitMutation')

    expect(spy).toBeCalled()
  })
})
