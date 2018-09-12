const commitMutation = (
  mutate,
  queryVariables,
  refetchQuery,
) => new Promise((resolve) => {
  const variables = { ...queryVariables }
  const refetchQueries = refetchQuery ? [{ query: refetchQuery }] : undefined

  const mutationParams = {
    variables,
    refetchQueries,
  }

  mutate(mutationParams).then((data) => {
    resolve(data)
  }).catch((error) => {
    throw new Error(error)
  })
})

export default commitMutation
