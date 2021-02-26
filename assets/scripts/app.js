'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // Authentication Events

  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-up-card').hide()
  $('#change-password-card').hide()

  // $('#sign-in-card').hide()

  // Logged in events
  $('#logged-in-user').hide()
  $('#logged-in-user').on('click', '#create-game', gameEvents.onCreateGame)
  $('#logged-in-user').on('click', '#sign-out', authEvents.onSignOut)

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
  $('#logged-in-user').on('click', '#change-password-button', function (event) {
    event.preventDefault()
    $('#logged-in-user').hide()
    $('#change-password-card').show()
    $('#change-password').on('submit', authEvents.onChangePassword)
  })

  // $('#logged-in-user').on('click', '')
  // Console log event example that works
  // $('#logged-in-user').on('click', '#box-0', function (event) {
  //   console.log('click event logged!', event)
  // })

  // Click event test that works
  // $('.tic-box').on('click', function (event) {
  //   console.log('Click Event Data: ', event)
  //   const data = event.target
  //   console.log('Targeted Box', data)
  // })

  $('.tic-box').on('click', gameEvents.onUpdateGame)
})
