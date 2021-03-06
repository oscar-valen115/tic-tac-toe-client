// const config = require('../config')
const store = require('./../store')

const createGameSuccess = function (response) {
  console.log('createGameSuccessData:', response)
  // xTurn = true
  // setGameBoardHover()
  $('#player1').css('display', 'block')
  $('#player2').css('display', 'block')
  $('#start-game-message').html('Get started! Player 1 starts!')
  store.game = response.game
}

const spotTaken = function () {
  console.log('Try a new spot!!!')
}

const updateGameSuccess = function (response) {
  console.log('updateGameSuccess Response: ', response)
  store.game = response.game
  const addClass = store.turnValue
  console.log('addClass object: ', addClass)
  const cell = store.game.cells
  console.log('Response event', response.target)
  // const currentClass = cell ? $('.game-board').addClass(xClass) : $('.game-board').addClass(circleClass)
  console.log('createGameSuccess Version ID: ', store.turnCount)
  console.log('Current Store Value after SUCCESS: ', store)
}

const updateGameFailure = function (response) {
  console.log('updateGameFailure: ', response)
}

const showGameWon = function () {
  $('#game-won-success').html('<h2>You won!</h2>')
}

const tie = function () {
  $('#game-tie').html('<h2>Tie!</h2>')
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  updateGameFailure,
  spotTaken,
  showGameWon,
  tie
}
