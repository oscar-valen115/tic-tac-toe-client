const store = require('./../store')

const signInSuccess = function (response) {
  console.log(response)
  console.log('Response from API: ', response)
  store.user = response.user

  console.log('Store object is now: ', store)
  // $('#error-message').text('Thank you for signing in')
  $('#sign-in-card').hide()
  $('#sign-in').trigger('reset')

  $('#logged-in-user').show()
  // $('#change-password-card').show()
}

const signInFailure = function () {
  $('#error-message').text('Sign in failed, please try again')
}

const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, please try again')
}

const changePasswordSuccess = function (response) {
  $('#error-message').text('Password was successfully changed')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function (response) {
  $('#error-message').text('Password change failed!')
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure
}
