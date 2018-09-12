import commitMutation from '../commitMutation'

describe('commitMutation', () => {
  test('returns the value of the mutate function passed to it as a promise', async () => {
    const params = {
      mutate: async () => true,
      variables: 'chicken',
      refetchQuery: 'test',
    }

    const { mutate, variables, refetchQuery } = params

    await expect(commitMutation(mutate, variables, refetchQuery))
      .resolves.toBe(true)
  })

  test('throws an error when the mutate function fails', async () => {
    const params = {
      mutate: async () => new Error('Chickens'),
      variables: 'chicken',
      refetchQuery: 'test',
    }

    const { mutate, variables, refetchQuery } = params

    await expect(commitMutation(mutate, variables, refetchQuery))
      .resolves.toEqual(Error('Chickens'))
  })
})
