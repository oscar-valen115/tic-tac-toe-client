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
  $('#sign-up-button').on('click', function(event) {
    event.preventDefault()
    $('#sign-in-card').hide()
    $('#sign-up-card').show()
  })

  // successfully change password once logged in to the main UI
  $('#logged-in-user').on('click', '#change-password-button', function (event) {
    event.preventDefault()
    $('#logged-in-user').hide()
    $('#change-password-card').show()
    $('#change-password').on('submit', authEvents.onChangePassword)
  })

  // Console log event example that works
  // $('#logged-in-user').on('click', '#box-0', function (event) {
  //   console.log('click event logged!', event)
  // })


  $('.tic-box').on('click', gameEvents.onGameChooseBox)
  // $('#logged-in-user').on('click', '#box-0', gameEvents.onChooseBox)
  // $('#logged-in-user').on('click', '#box-1', gameEvents.onChooseBox)
  // $('#logged-in-user').on('click', '#box-2', gameEvents.onChooseBox)
  // $('#logged-in-user').on('click', '#box-3', gameEvents.onChooseBox)
  // $('#logged-in-user').on('click', '#box-4', gameEvents.onChooseBox)
  // $('#logged-in-user').on('click', '#box-5', gameEvents.onChooseBox)
  // $('#logged-in-user').on('click', '#box-6', gameEvents.onChooseBox)
  // $('#logged-in-user').on('click', '#box-7', gameEvents.onChooseBox)
  // $('#logged-in-user').on('click', '#box-8', gameEvents.onChooseBox)
})
