const commitMutation = (variables: Object, mutate: Function, refetchQuery: Object): Promise <any> => {
  const refetchQueries = refetchQuery ? [{ query: refetchQuery }] : undefined

  return new Promise((resolve, reject) => {
    mutate({ variables, refetchQueries }).then((data) => {
      resolve(data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default commitMutation
