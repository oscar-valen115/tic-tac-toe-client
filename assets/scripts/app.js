'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const uiEvents = require('./auth/ui')


$(() => {
  // Authentication Events

  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-up-card').hide()
  $('#change-password-card').hide()

  // Logged in events
  $('#logged-in-user').hide()
  $('#logged-in-user').on('click', '#create-game', gameEvents.onCreateGame)
  $('#logged-in-user').on('click', '#sign-out', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // From sign-in-card, click sign-up-button to sign up for existing users
  $('#sign-up-button').on('click', function (event) {
    event.preventDefault()
    $('#sign-in-card').hide()
    $('#sign-up-card').show()
  })

  // From sign-up-card, click sign-in-button to sign in for existing users
  $('#sign-in-button').on('click', function (event) {
    event.preventDefault()
    $('#sign-up-card').hide()
    $('#sign-in-card').show()
  })

  // successfully change password once logged in to the main UI

  $('#change-password-button').on('click', function (event) {
    event.preventDefault()
    $('.auth-section').show()
    $('#sign-up-card').hide()
    $('#sign-in-card').hide()
    $('#change-password-card').show()
  })
  $('.tic-box').on('click', gameEvents.onUpdateGame)
  $('.new-game-button').on('click', gameEvents.onStartNewGame)
  $('#cancel-game').on('click', uiEvents.resetGame)
})
