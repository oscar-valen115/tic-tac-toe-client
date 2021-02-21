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

const clickEvent = function (response) {
  const cell = response.target
  console.log(cell)
  const currentClass = cell ? $('.game-board').addClass(xClass) : $('.game-board').addClass(circleClass)
  // placeGamePlayHover(cell, currentClass)
  // swapTurns()
  // placeMark
  // Check for win
  // check for draw
  // Switch Turns
}

// const placeGamePlayHover = function (cell, currentClass) {
//   $(cell).addClass(currentClass)
// }

// Grabbing elements by their ID
// const cellElements = document.querySelectorAll('[data-cell-index]')


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
  console.log('Store game Value', store.turnValue)
  const cell = response.game.cells
  console.log(cell)
  // const currentClass = cell ? $('.game-board').addClass(xClass) : $('.game-board').addClass(circleClass)
}

const updateGameFailure = function (response) {
  console.log('updateGameFailure: ', response)
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  updateGameFailure
}
