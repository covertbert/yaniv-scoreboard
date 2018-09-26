import { createHandlers, mapDispatchToProps } from '../PlayerCardContainer'

describe('deletePlayerMutation', () => {
  test('is an existing function', async () => {
    expect(await createHandlers.deletePlayerMutation('Bill')).toBeInstanceOf(Function)
  })
})

describe('mapDispatchToProps', () => {
  test('it creates the correct handlers', () => {
    const createdProps = mapDispatchToProps()

    expect(createdProps.addPlayerToGame).toBeTruthy()
    expect(createdProps.removePlayerFromGame).toBeTruthy()
  })
})
