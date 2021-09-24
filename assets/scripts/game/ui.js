/* eslint-disable indent */
// const config = require('../config')
const store = require('./../store')

const createGameSuccess = function (response) {
  store.game = response.game
  startGame()
}
const createNewGameSuccess = function (response) {
  store.game = response.game
  store.turnValue = 'x'
  store.turnCount = 0
  clearBoard()
  $('#game-tie').html('')
  $('#game-won-success').html('')
 $('.new-game-button').css('display', 'none')
  setGameBoardHover()

}

const clearBoard = function () {
  $('.game-board').removeClass('o')
  $('#box-0').removeClass('x')
  $('#box-1').removeClass('x')
  $('#box-2').removeClass('x')
  $('#box-3').removeClass('x')
  $('#box-4').removeClass('x')
  $('#box-5').removeClass('x')
  $('#box-6').removeClass('x')
  $('#box-7').removeClass('x')
  $('#box-8').removeClass('x')
  $('#box-0').removeClass('o')
  $('#box-1').removeClass('o')
  $('#box-2').removeClass('o')
  $('#box-3').removeClass('o')
  $('#box-4').removeClass('o')
  $('#box-5').removeClass('o')
  $('#box-6').removeClass('o')
  $('#box-7').removeClass('o')
  $('#box-8').removeClass('o')
}

const startGame = function () {
  store.turnValue = 'x'
  setGameBoardHover()
  $('#player1').css('display', 'block')
  $('#player2').css('display', 'block')
  $('.tic-container').css('display', 'block')
  $('#start-game-message').html('Get started! Player 1 starts!')
  $('#cancel-game').css('display', 'block')
}

const setGameBoardHover = function () {
  if (store.turnValue === 'x') {
    $('.game-board').removeClass('o')
    $('.game-board').addClass('x')
  } else if (store.turnValue === 'o') {
    $('.game-board').removeClass('x')
    $('.game-board').addClass('o')

  }
}

const updateGameSuccess = function (response) {
  store.game = response.game
}

const updateGameFailure = function (response) {
  console.log('updateGameFailure: ', response)
}

const showGameWon = function (response) {
  $('#game-won-success').html(`<h2>${store.turnValue} wins!</h2>`)
  // $('.new-game-button').css('display', 'block')
  $('.new-game-button').show()
}

const tie = function () {
  $('#game-tie').html('<h2>Tie!</h2>')
  $('.new-game-button').css('display', 'block')
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  updateGameFailure,
  showGameWon,
  tie,
  createNewGameSuccess
}
