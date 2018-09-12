import { createHandlers } from '../PlayerCardContainer'

describe('createPlayerMutation', () => {
  test('calls the mutate function', async () => {
    const mutate = jest.fn()
    const refetchQuery = 'test'

    await createHandlers.deletePlayerMutation({ mutate, refetchQuery })('Bill')

    expect(mutate).toBeCalled()
  })
})
