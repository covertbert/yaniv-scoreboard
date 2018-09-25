const currentGameAddPlayer = (payload) => ({
  type: 'CURRENT_GAME_ADD_PLAYER',
  payload,
})

const currentGameRemovePlayer = (payload) => ({
  type: 'CURRENT_GAME_REMOVE_PLAYER',
  payload,
})

export {
  currentGameAddPlayer,
  currentGameRemovePlayer,
}
