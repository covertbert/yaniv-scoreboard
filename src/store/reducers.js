import { combineReducers } from 'redux'

const playersInGame = []

const currentGame = (state = playersInGame, { type, payload }) => {
  switch (type) {
    case 'CURRENT_GAME_ADD_PLAYER':
      return [...state, {
        id: payload.id,
        name: payload.name,
      }]

    // case 'REMOVE_PLAYER':
    //   return {
    //     players: [...state, {
    //       id: payload.id,
    //       name: payload.name,
    //     }],
    //   }
    default:
      return state
  }
}

const rootReducer = combineReducers({ currentGame })

export default rootReducer
