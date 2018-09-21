import { createHandlers } from '../PlayerCardContainer'

describe('deletePlayerMutation', () => {
  test('is a function', async () => {
    expect(await createHandlers.deletePlayerMutation('Bill')).toBeInstanceOf(Function)
  })
})
