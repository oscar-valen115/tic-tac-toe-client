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

module.exports = {
  onCreateGame,
  onChooseBox
}
