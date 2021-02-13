const store = require('./../store');

const signInSuccess = function(response) {
  event.preventDefault()
  console.log('Response from API: ', response)
  store.user = response.user

  console.log('Store object is now: ', store)
  $('#error-message').text('Thank you for signing in')
  $('#sign-in').hide()
  $('#game-ui').html('GAME UI is HERE!!')
}

module.exports = {
  signInSuccess
}
