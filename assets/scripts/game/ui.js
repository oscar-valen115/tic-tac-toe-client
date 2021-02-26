// const config = require('../config')

const store = require('./../store')
const gameEvents = require('./events')

// X and O atributes as well as turn
const xClass = 'x'
const circleClass = 'o'
// let xTurn

// const setGameBoardHover = function () {
//   $('#game-Board').removeClass(xClass)
//   $('#game-Board').removeClass(circleClass)
//   if (xTurn) {
//     $('.gameBoard').addClass(xClass)
//   } else {
//     $('.gameBoard').addClass(circleClass)
//   }
// }


const createGameSuccess = function (response) {
  console.log('createGameSuccessData:', response)
  // xTurn = true
  // setGameBoardHover()
  $('#player1').css('display', 'block')
  $('#player2').css('display', 'block')
  $('#start-game-message').html('Get started! Player 1 starts!')
  store.game = response.game
  console.log('store data:', store)
  console.log('store.game shows: ', store.game)
  console.log('Store Data:', store)
}

const updateGameSuccess = function (response) {
  console.log('updateGameSuccess Response: ', response)
  console.log('Response game Value', store.turnValue)
  store.game = response.game
  const addClass = store.turnValue
  console.log('addClass object: ', addClass)

  const cell = store.game.cells
  $('.tic-box').addClass(store.turnValue)

  console.log('cell:', cell)
  // const currentClass = cell ? $('.game-board').addClass(xClass) : $('.game-board').addClass(circleClass)
  console.log('createGameSuccess Version ID: ', store.game.__v)
  console.log('Current Store Value after SUCCESS: ', store)
}

const updateGameFailure = function (response) {
  console.log('updateGameFailure: ', response)
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  updateGameFailure
}
