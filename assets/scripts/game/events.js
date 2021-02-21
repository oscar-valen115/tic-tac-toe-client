const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const getFormFields = require('../../../lib/get-form-fields')

store.turnValue = ''

const onCreateGame = function (event) {
  console.log('event', event)
  event.preventDefault()
  const form = event.target
  console.log('form: ', form)
  const data = getFormFields(form)
  console.log('data:', data)

  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (event) {
  // get data from user input
  // send data to api for update
    // handle successful update
    // handle game over
    // handle game continue
  event.preventDefault()
  console.log('Event Logged here:', event)
  const gameEvent = event.currentTarget
  console.log('gameEvent Target Logged here:', event)

  const gameIndex = $(gameEvent).data('cell-index')
  console.log('gameIndex info: ', gameIndex)
  if (store.game.__v % 2 === 0) {
    store.turnValue = 'x'
  } else {
    store.turnValue = 'o'
  }
const id = store.game._id
console.log('Game ID Number:', id)
console.log('Version ID Number:', store.game.__v)

  const gameInfo = {
    game: {
      cell: {
        index: gameIndex,
        value: store.turnValue
      },
      over: store.game.over
    }
  }

  api.updateGame(id, gameInfo)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}
// const isGameWon = function (game) {
//   if (
//     (game.cells[0] === game.cells[1] && game.cells[1] === game.cells[2]) ||
//     (game.cells[0] === game.cells[4] && game.cells[4] === game.cells[8]) ||
//     (game.cells[0] === game.cells[3] && game.cells[3] === game.cells[6]) ||
//     (game.cells[1] === game.cells[4] && game.cells[4] === game.cells[7]) ||
//     (game.cells[2] === game.cells[4] && game.cells[4] === game.cells[6]) ||
//     (game.cells[2] === game.cells[5] && game.cells[5] === game.cells[8]) ||
//     (game.cells[3] === game.cells[4] && game.cells[4] === game.cells[5])
//   ) {
//     ui.showGameWon(game.cells)
//     game.over = true
//     return game
//   } else {
//     console.log('Else hit:', game.cells)
//   }
// }

module.exports = {
  onCreateGame,
  onUpdateGame
  // isGameWon
}
