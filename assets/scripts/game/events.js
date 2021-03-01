const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

store.turnValue = ''
store.turnCount = 0

// X and O atributes as well as turn
const xClass = 'x'
const circleClass = 'o'
let xTurn

const onCreateGame = function () {
  reset()
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
  } else if (store.clickedBox.text() !== '') {
    ui.spotTaken()
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
        store.clickedBox.text(store.turnValue)
        isGameWon()
      })
      .catch(ui.updateGameFailure)
  }
}

// Game Logic section - start
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

// const startGame = function () {
//   store.turnValue = 'x'
//   setGameBoardHover()
// }

// const setGameBoardHover = function () {
//   $('.game-board').removeClass(xClass)
//   $('.game-board').removeClass(circleClass)
//   if (store.turnValue === 'x') {
//     $('.game-board').addClass(xClass)
//   } else if (store.turnValue === 'o') {
//     $('.game-board').addClass(circleClass)
//   }
// }

const reset = function () {
  store.turnValue = 'x'
  store.turnCount = 0
  $('.tic-box').text('')
}

// Game Logic section - end

module.exports = {
  onCreateGame,
  onUpdateGame,
  isGameWon
}
