const api = require('./api')

const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')

const onCreateGame = function (event) {
  console.log('event', event)
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onChooseBox = function (event) {
  console.log(event)
  event.preventDefault()

  api.chooseBox(data)
    .then(ui.chooseBoxSuccess)
    .catch(ui.chooseBoxFailure)
}
const isGameWon = function (game) {
  if (
    (game.cells[0] === game.cells[1] && game.cells[1] === game.cells[2]) ||
    (game.cells[0] === game.cells[4] && game.cells[4] === game.cells[8]) ||
    (game.cells[0] === game.cells[3] && game.cells[3] === game.cells[6]) ||
    (game.cells[1] === game.cells[4] && game.cells[4] === game.cells[7]) ||
    (game.cells[2] === game.cells[4] && game.cells[4] === game.cells[6]) ||
    (game.cells[2] === game.cells[5] && game.cells[5] === game.cells[8]) ||
    (game.cells[3] === game.cells[4] && game.cells[4] === game.cells[5])
  ) { return true }
}

module.exports = {
  onCreateGame,
  onChooseBox,
  isGameWon
}
