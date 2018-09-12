import { createHandlers } from '../NewPlayerButtonContainer'

describe('createPlayerMutation', () => {
  test('calls the mutate function', async () => {
    const mutate = jest.fn()
    const refetchQuery = 'test'

    await createHandlers.createPlayerMutation({ mutate, refetchQuery })('Bill')

    expect(mutate).toBeCalled()
  })
})
