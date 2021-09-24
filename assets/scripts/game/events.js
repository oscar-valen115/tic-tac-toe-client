const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

store.turnValue = 'x'
store.turnCount = 0

const onCreateGame = function () {
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  store.clickedBox = $(event.target)
  store.clickIndex = store.clickedBox.data('cell-index')

  if (store.game.over) {
    ui.showGameWon()
  } else {
    store.turnCount++
    if (store.turnCount % 2 === 0) {
      store.turnValue = 'o'
    } else {
      store.turnValue = 'x'
    }
    const id = store.game._id

    const gameInfo = {
      game: {
        cell: {
          index: store.clickIndex,
          value: store.turnValue
        },
        over: store.game.over
      }
    }

    api.updateGame(id, gameInfo)
      .then(ui.updateGameSuccess)
      .then(function () {
        $(`#box-${store.clickIndex}`).addClass(store.turnValue)
        if(store.turnValue === 'o') {
          $('.game-board').removeClass('o')
          $('.game-board').addClass('x')
        } else if (store.turnValue === 'x') {
          $('.game-board').removeClass('x')
          $('.game-board').addClass('o')
        }
        isGameWon()
      })
      .catch(ui.updateGameFailure)
  }
}

// Game Logic section - start

// const resetGame = function () {
//   store.turnValue = ''
//   store.turnCount = 0
//   $('.game-board').removeClass('o')
//   $('.game-board').removeClass('x')
//   $('#box-0').removeClass('x')
//   $('#box-1').removeClass('x')
//   $('#box-2').removeClass('x')
//   $('#box-3').removeClass('x')
//   $('#box-4').removeClass('x')
//   $('#box-5').removeClass('x')
//   $('#box-6').removeClass('x')
//   $('#box-7').removeClass('x')
//   $('#box-8').removeClass('x')
//   $('#box-0').removeClass('o')
//   $('#box-1').removeClass('o')
//   $('#box-2').removeClass('o')
//   $('#box-3').removeClass('o')
//   $('#box-4').removeClass('o')
//   $('#box-5').removeClass('o')
//   $('#box-6').removeClass('o')
//   $('#box-7').removeClass('o')
//   $('#box-8').removeClass('o')
//   // $('.tic-box').text('')
// }

// Game Logic section - end
const isGameWon = function () {
  const winner = (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) ||
                 (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) ||
                 (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) ||
                 (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) ||
                 (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) ||
                 (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) ||
                 (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5])

  const tie = store.game.cells.every(box => box !== '')
  if (winner) {
    store.game.over = true
    ui.showGameWon()
  } else if (tie) {
    store.game.over = true
    ui.tie()
  }
}

const onStartNewGame = function (event) {
  event.preventDefault()
  store.turnValue = 'x'
  store.turnCount = 0
  api.createGame()
    .then(ui.createNewGameSuccess)
    .catch(ui.createGameFailure)
}

const onGetGamesHistory = function (event) {
  event.preventDefault()
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  onStartNewGame,
  onGetGamesHistory
}
