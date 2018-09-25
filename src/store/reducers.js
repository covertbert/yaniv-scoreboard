import { combineReducers } from 'redux'

const playersInGame = []

const currentGame = (state = playersInGame, { type, payload }) => {
  switch (type) {
    case 'CURRENT_GAME_ADD_PLAYER':
      return [...state, {
        id: payload.id,
        name: payload.name,
      }]
    case 'CURRENT_GAME_REMOVE_PLAYER':
      return state.filter((player) => player.id !== payload)
    default:
      return state
  }
}

const rootReducer = combineReducers({ currentGame })

export default rootReducer
