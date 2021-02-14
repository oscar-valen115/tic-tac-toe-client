const api = require('./api')

const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')

const onSignIn = function (event) {
  console.log('event', event)
  event.preventDefault()
  const form = event.target
  console.log('form', form)
  const data = getFormFields(form)
  console.log('data', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword
}
