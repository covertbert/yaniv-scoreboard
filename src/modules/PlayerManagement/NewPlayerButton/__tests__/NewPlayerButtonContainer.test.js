import { createHandlers } from '../NewPlayerButtonContainer'

describe('createPlayerMutation', () => {
  test('is a function', async () => {
    expect(await createHandlers.createPlayerMutation('Bill')).toBeInstanceOf(Function)
  })
})
