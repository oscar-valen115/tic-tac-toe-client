const store = require('./../store')

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('.auth-section').hide()
  $('#logged-in-user').show()
}

const signInFailure = function () {
  $('#error-message').text('Sign in failed, please try again')
}

const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up!')
  $('#sign-up-card').hide()
  $('#sign-in-card').show()
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, please try again')
}

const changePasswordSuccess = function () {
  $('.auth-section').hide()
  $('#logged-in-user').show()
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function () {
  $('#error-message').text('Password change failed!')
}

const signOutSuccess = function (response) {
  store.user = {}
  resetGame()
  $('#logged-in-user').hide()
  $('.auth-section').show()
  $('#sign-up-card').hide()
  $('#change-password-card').hide()
  $('#sign-in-card').show()
}

const signOutFailure = function () {
  $('#error-message').text('Sign out failed, please try again')
}

const resetGame = function () {
  store.game = {}
  store.turnValue = ''
  store.turnCount = 0
  $('.game-board').removeClass('o')
  $('.game-board').removeClass('x')
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
  // $('.tic-box').text('')
  $('#player1').css('display', 'none')
  $('#player2').css('display', 'none')
  $('.tic-container').css('display', 'none')
  $('#cancel-game').css('display', 'none')
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  resetGame
}
