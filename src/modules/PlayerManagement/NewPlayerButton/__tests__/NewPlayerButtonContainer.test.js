// import { createHandlers } from '../NewPlayerButtonContainer'
// import { commitMutation } from '../../../../apollo/commitMutation'

// jest.mock('../../../../apollo/commitMutation', () => ({
//   commitMutation: jest.fn(() => Promise.resolve()),
// }))

// describe('createHandlers', () => {
//   test('it calls the commitMutation function', () => {
//     const playerMutation = createHandlers.createPlayerMutation('name')

//     const stuff = { mutate: jest.fn(), refetchQuery: { test: 'test' } }

//     playerMutation(stuff)

//     expect(commitMutation).toBeCalled()
//   })
// })
