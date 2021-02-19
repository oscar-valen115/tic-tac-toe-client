const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const getFormFields = require('../../../lib/get-form-fields')

store.turn = 0
store.turnValue = ''
// store.click = false

const onCreateGame = function (event) {
  console.log('event', event)
  event.preventDefault()
  const form = event.target
  console.log('form: ', form)
  const data = getFormFields(form)
  console.log('data:',data)

  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGameChooseBox = function (event) {
  event.preventDefault()
  console.log('Event Logged here:', event)
  const gameEvent = event.target
  console.log('gameEvent Target Logged here:', event)

  const gameIndex = $(gameEvent).data('cell-index')
  store.turn++
  if (store.turn % 2 === 0) {
    store.turnValue = 'x'
  } else {
    store.turnValue = 'o'
  }
  const gameInfo = {
    game: {
      cell: {
        index: gameIndex,
        value: store.turnValue
      },
      over: store.game.over
    }
  }
  console.log('gameInfo Index: ', gameIndex)
  console.log('gameInfo value: ', store.turnValue)
  console.log('gameInfo over: ', store.game.over)

  // get data from user input
  // send data to api for update
    // handle successful update
    // handle game over
    // handle game continue

  api.chooseBox(gameInfo)
    .then(ui.chooseBoxSuccess)
    .catch(ui.chooseBoxFailure)
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
  onGameChooseBox,
  // isGameWon
}
