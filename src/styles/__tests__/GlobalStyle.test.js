import GlobalStyle from '../GlobalStyle'

describe('GlobalStyle', () => {
  test('to perform correctly', () => {
    expect(GlobalStyle.name).toBe('GlobalStyleComponent')
    expect(GlobalStyle.prototype.render).toBeTruthy()
  })
})
