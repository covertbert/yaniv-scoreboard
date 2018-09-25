import {
  getAvailablePlayers,
  createProps,
  mapStateToProps,
  query,
} from '../NewGameContainer'

describe('mapStateToProps', () => {
  test('it maps the correct props', () => {
    expect(mapStateToProps({})).toEqual({
      playersInGame: undefined,
    })
  })
})

describe('createProps', () => {
  test('it maps the correct props', () => {
    const expectedProps = {
      refetchQuery: query,
      availablePlayers: [],
    }
    expect(createProps({ players: [], playersInGame: [] })).toEqual(expectedProps)
  })
})

describe('getAvailablePlayers', () => {
  test('it only returns players that are not in current game', () => {
    const allPlayers = [
      {
        id: 'tom',
        name: 'Tom',
      },
      {
        id: 'dick',
        name: 'Dick',
      },
      {
        id: 'abdul',
        name: 'Abdul',
      },
    ]

    const playersInGame = [
      {
        id: 'abdul',
        name: 'Abdul',
      },
    ]

    const expectedAvailablePlayers = [
      {
        id: 'tom',
        name: 'Tom',
      },
      {
        id: 'dick',
        name: 'Dick',
      },
    ]

    expect(getAvailablePlayers(allPlayers, playersInGame)).toEqual(expectedAvailablePlayers)
  })
})
