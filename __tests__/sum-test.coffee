sumModule = '../src/javascript/sum.coffee'
jest.dontMock sumModule
describe 'sum', ->
  it 'adds 1 + 2 to equal 3', ->
    sum = require sumModule
    expect(sum 1, 2).toBe 3
