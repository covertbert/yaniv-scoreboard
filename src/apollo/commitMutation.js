const commitMutation = (
  mutate,
  variables,
  refetchQuery,
) => new Promise((resolve) => {
  mutate({
    variables: {
      ...variables,
    },
    refetchQueries: [{
      query: refetchQuery,
    }],
  }).then((data) => {
    resolve(data)
  }).catch((error) => {
    throw new Error(error)
  })
})

export default commitMutation
