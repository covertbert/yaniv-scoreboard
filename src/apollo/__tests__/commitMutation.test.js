import commitMutation from '../commitMutation'

describe('commitMutation', () => {
  test('returns the value of the mutate function passed to it as a promise', async () => {
    const params = {
      variables: { name: 'chicken' },
      mutate: async () => true,
      refetchQuery: 'test',
    }

    const { variables, mutate, refetchQuery } = params

    await expect(commitMutation(variables, mutate, refetchQuery))
      .resolves.toBe(true)
  })

  test('throws an error when the mutate function fails', async () => {
    const params = {
      variables: 'chicken',
      mutate: async () => new Error('Chickens'),
      refetchQuery: 'test',
    }

    const { variables, mutate, refetchQuery } = params

    await expect(commitMutation(variables, mutate, refetchQuery))
      .resolves.toEqual(Error('Chickens'))
  })
})
