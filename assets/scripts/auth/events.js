const api = require('./api')

const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

module.exports = {
  onSignIn
}
